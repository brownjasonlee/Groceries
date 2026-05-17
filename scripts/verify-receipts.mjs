import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const receiptDataDir = join(root, "grocery-inventory/receipts/data");
const cents = (value) => Math.round(Number(value) * 100);
const dollars = (value) => (value / 100).toFixed(2);
const failures = [];
const summaries = [];

if (!existsSync(receiptDataDir)) {
  failures.push("Missing receipt data directory: grocery-inventory/receipts/data");
} else {
  const files = readdirSync(receiptDataDir).filter((file) => file.endsWith(".json")).sort();

  if (!files.length) {
    failures.push("No receipt JSON files found.");
  }

  for (const file of files) {
    const fullPath = join(receiptDataDir, file);
    const receipt = JSON.parse(readFileSync(fullPath, "utf8"));
    const label = basename(file);

    if (!Array.isArray(receipt.items)) {
      failures.push(`${label}: items must be an array.`);
      continue;
    }

    if (receipt.items.length !== receipt.totals.itemsSold) {
      failures.push(`${label}: item count ${receipt.items.length} does not match receipt total ${receipt.totals.itemsSold}.`);
    }

    const lineNumbers = receipt.items.map((item) => item.line);
    const uniqueLines = new Set(lineNumbers);
    if (uniqueLines.size !== lineNumbers.length) {
      failures.push(`${label}: duplicate item line numbers found.`);
    }

    const itemSubtotal = receipt.items.reduce((sum, item) => sum + cents(item.price), 0);
    const expectedSubtotal = cents(receipt.totals.subtotal);
    if (itemSubtotal !== expectedSubtotal) {
      failures.push(`${label}: item subtotal ${dollars(itemSubtotal)} does not match receipt subtotal ${dollars(expectedSubtotal)}.`);
    }

    const expectedTotal = cents(receipt.totals.subtotal) + cents(receipt.totals.tax);
    if (expectedTotal !== cents(receipt.totals.total)) {
      failures.push(`${label}: subtotal + tax ${dollars(expectedTotal)} does not match total ${Number(receipt.totals.total).toFixed(2)}.`);
    }

    for (const item of receipt.items) {
      if (!item.receiptName || typeof item.receiptName !== "string") {
        failures.push(`${label}: line ${item.line} is missing receiptName.`);
      }

      if (!item.category || typeof item.category !== "string") {
        failures.push(`${label}: line ${item.line} is missing category.`);
      }

      if (!Number.isFinite(Number(item.price))) {
        failures.push(`${label}: line ${item.line} has invalid price.`);
      }
    }

    summaries.push({
      label,
      date: receipt.transaction.date,
      itemCount: receipt.items.length,
      subtotal: Number(receipt.totals.subtotal),
      tax: Number(receipt.totals.tax),
      total: Number(receipt.totals.total),
      categories: summarizeCategories(receipt.items)
    });
  }
}

if (failures.length) {
  console.error("Receipt verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

writeFileSync(
  join(root, "grocery-inventory/receipts/receipt-summary.json"),
  `${JSON.stringify({ receipts: summaries }, null, 2)}\n`
);

console.log(`Receipt verification passed for ${summaries.length} receipt(s).`);

function summarizeCategories(items) {
  const categories = new Map();

  for (const item of items) {
    const current = categories.get(item.category) || { count: 0, spend: 0 };
    current.count += 1;
    current.spend += cents(item.price);
    categories.set(item.category, current);
  }

  return Object.fromEntries(
    [...categories.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([category, value]) => [
        category,
        { count: value.count, spend: Number(dollars(value.spend)) }
      ])
  );
}
