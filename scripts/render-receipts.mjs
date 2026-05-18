import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const receiptDataDir = join(root, "grocery-inventory/receipts/data");
const outputDir = join(root, "grocery-inventory/receipts");

for (const file of readdirSync(receiptDataDir).filter((entry) => entry.endsWith(".json")).sort()) {
  const receipt = JSON.parse(readFileSync(join(receiptDataDir, file), "utf8"));
  const outputName = `${basename(file, ".json")}.md`;
  const categorySummary = summarizeCategories(receipt.items);

  const lines = [
    `# ${receipt.transaction.date} ${receipt.store.name} Receipt`,
    "",
    `Photo: [${receipt.transaction.date} receipt](${receipt.transaction.receiptPhoto})`,
    ...(receipt.transaction.digitalReceipt
      ? [`Digital receipt: [Walmart PDF](${receipt.transaction.digitalReceipt})`]
      : []),
    "",
    "## Transaction",
    "",
    `- Store: ${receipt.store.name} #${receipt.store.number}`,
    `- Address: ${receipt.store.address}`,
    `- TC number: \`${receipt.transaction.tcNumber}\``,
    `- Terminal: ${receipt.transaction.terminal}`,
    `- Transaction number: ${receipt.transaction.transactionNumber}`,
    `- Time: ${receipt.transaction.date} ${receipt.transaction.time}`,
    "",
    "## Totals",
    "",
    `- Items sold: ${receipt.totals.itemsSold}`,
    `- Subtotal: $${receipt.totals.subtotal.toFixed(2)}`,
    `- Tax: $${receipt.totals.tax.toFixed(2)}`,
    `- Total: $${receipt.totals.total.toFixed(2)}`,
    "",
    "## Category Spend",
    "",
    "| Category | Count | Spend |",
    "| --- | ---: | ---: |",
    ...Object.entries(categorySummary).map(([category, value]) => `| ${category} | ${value.count} | $${value.spend.toFixed(2)} |`),
    "",
    "## Items",
    "",
    "| Line | Receipt name | Walmart name | Category | UPC | Price |",
    "| ---: | --- | --- | --- | --- | ---: |",
    ...receipt.items.map((item) => `| ${item.line} | ${item.receiptName} | ${item.officialName || ""} | ${item.category} | ${item.upc || ""} | $${Number(item.price).toFixed(2)} |`),
    ""
  ];

  writeFileSync(join(outputDir, outputName), `${lines.join("\n")}\n`);
  console.log(`Rendered receipt markdown: grocery-inventory/receipts/${outputName}`);
}

function summarizeCategories(items) {
  const categories = new Map();

  for (const item of items) {
    const current = categories.get(item.category) || { count: 0, spend: 0 };
    current.count += 1;
    current.spend += Number(item.price);
    categories.set(item.category, current);
  }

  return Object.fromEntries([...categories.entries()].sort(([a], [b]) => a.localeCompare(b)));
}
