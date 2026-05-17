import { readFileSync, existsSync } from "node:fs";
import { join, normalize } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "index.html",
  ".nojekyll",
  "virtual-fridge/index.html",
  "virtual-fridge/styles.css",
  "virtual-fridge/app.js",
  "grocery-inventory/current-inventory.md"
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    failures.push(`Missing required file: ${file}`);
  }
}

const appPath = join(root, "virtual-fridge/app.js");
const appSource = readFileSync(appPath, "utf8");
const htmlSource = readFileSync(join(root, "virtual-fridge/index.html"), "utf8");
const rootHtmlSource = readFileSync(join(root, "index.html"), "utf8");

for (const tab of ["fridge", "freezer", "pantry", "photos"]) {
  if (!appSource.includes(`${tab}:`) && tab !== "photos") {
    failures.push(`Missing zone data for tab: ${tab}`);
  }

  if (!htmlSource.includes(`data-tab="${tab}"`)) {
    failures.push(`Missing tab button in HTML: ${tab}`);
  }
}

if (!rootHtmlSource.includes("virtual-fridge/")) {
  failures.push("Root index.html must link or redirect to virtual-fridge/.");
}

const photoPattern = /photo\("([^"]+)",\s*"([^"]+)"\)/g;
const photoMatches = [...appSource.matchAll(photoPattern)];

if (photoMatches.length < 6) {
  failures.push(`Expected at least 6 photo references, found ${photoMatches.length}.`);
}

for (const [, name, relativePath] of photoMatches) {
  const resolvedPath = normalize(join(root, "virtual-fridge", relativePath));

  if (!resolvedPath.startsWith(root)) {
    failures.push(`Photo path escapes repository root: ${name}`);
    continue;
  }

  if (!existsSync(resolvedPath)) {
    failures.push(`Missing photo asset for "${name}": ${relativePath}`);
  }
}

const requiredDomIds = [
  "searchInput",
  "inventoryView",
  "zoneTitle",
  "zoneKicker",
  "zoneSummary",
  "useFirstCount",
  "overstockCount",
  "gapCount",
  "tripBias"
];

for (const id of requiredDomIds) {
  if (!htmlSource.includes(`id="${id}"`)) {
    failures.push(`Missing DOM mount point: #${id}`);
  }
}

if (failures.length) {
  console.error("Virtual fridge verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Virtual fridge verification passed with ${photoMatches.length} photo references.`);
