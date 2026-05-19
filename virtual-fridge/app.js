const zones = {
  fridge: {
    title: "Fridge",
    kicker: "Cold inventory",
    summary:
      "Put-away photo confirms the Walmart fridge and freezer baseline. Use produce first, then work through the planned proteins.",
    tone: "fridge",
    shelves: [
      {
        name: "Dairy / Eggs / Cheese",
        items: [
          item("Milk, partial gallon", "check", { brand: "Kirkland", brandType: "store-brand" }),
          item("Eggs, visible carton", "check"),
          item("Sour cream", "check", { brand: "Daisy", brandType: "brand" }),
          item("Plain Greek yogurt", "check", { brand: "Great Value", brandType: "store-brand" }),
          item("Feta crumbles", "overstock", { brand: "President", brandType: "brand" }),
          item("String cheese", "overstock", { brand: "Great Value", brandType: "store-brand" }),
          item("Mozzarella cheese", "overstock", { brand: "Great Value", brandType: "store-brand" }),
          item("Shredded mozzarella", "overstock", { brand: "Great Value", brandType: "store-brand" }),
          item("Shredded cheddar", "overstock", { brand: "Great Value", brandType: "store-brand" }),
          item("Velveeta slices", "overstock", { brand: "Velveeta", brandType: "brand" }),
          item("Butter", "check"),
          item("Hummus", "use-first"),
          item("Yogurt or dip cup", "verify")
        ]
      },
      {
        name: "Produce",
        items: [
          item("Romaine lettuce", "use-first"),
          item("Red onion", "check"),
          item("Yellow onions", "check"),
          item("Baby spinach", "use-first"),
          item("Spring mix", "use-first"),
          item("Cucumbers", "use-first"),
          item("Red potatoes", "check"),
          item("Broccoli", "use-first"),
          item("Bananas", "use-first"),
          item("Strawberries", "use-first"),
          item("Apple", "check"),
          item("Avocado", "use-first"),
          item("Yellow bell pepper", "use-first"),
          item("Roma tomatoes", "use-first"),
          item("Green beans", "verify"),
          item("Lemon half", "use-first"),
          item("Leftover greens", "use-first")
        ]
      },
      {
        name: "Prepared / Leftovers",
        items: [
          item("Leftover containers", "use-first"),
          item("Sausage or hot dog links", "verify"),
          item("Cooked sweet potato", "verify"),
          item("Foil-wrapped leftovers", "use-first"),
          item("Bagel or roll", "verify")
        ]
      },
      {
        name: "Fresh Proteins",
        items: [
          item("Chicken thighs", "use-first"),
          item("Ground beef", "use-first"),
          item("Bacon", "check"),
          item("Deli ham", "check")
        ]
      }
    ],
    door: [
      {
        name: "Sauces",
        items: [
          item("Ketchup", "overstock"),
          item("Kewpie mayo", "overstock"),
          item("Yellow mustard", "overstock"),
          item("Ranch", "overstock"),
          item("Hot sauces", "overstock"),
          item("Sriracha-style sauce", "overstock"),
          item("Barbecue sauce", "overstock")
        ]
      },
      {
        name: "Jars",
        items: [
          item("Salsa", "overstock"),
          item("Pickles / gherkins", "overstock"),
          item("Jalapeno slices", "overstock"),
          item("Diced garlic", "check"),
          item("Strawberry spread", "check"),
          item("Lemon juice", "check")
        ]
      }
    ]
  },
  freezer: {
    title: "Freezer",
    kicker: "Frozen inventory",
    summary:
      "Freezer rescue meals plus new kid convenience foods can cover schedule pressure nights before restocking.",
    tone: "freezer",
    shelves: [
      {
        name: "Ready Meals",
        items: [
          item("Kirkland cheese pizza", "use-first"),
          item("Stouffer's lasagna", "use-first"),
          item("Butternut squash ravioli", "use-first"),
          item("Blackened salmon", "use-first"),
          item("Paleo orange chicken", "use-first"),
          item("Mini wontons", "check")
        ]
      },
      {
        name: "Proteins",
        items: [
          item("Chicken tenderloins", "check"),
          item("Raw shrimp", "check"),
          item("Grilled chicken strips", "check"),
          item("Beef hot dogs", "check"),
          item("Smoked sausage", "check"),
          item("Chicken tenders", "overstock"),
          item("Chicken nuggets", "overstock"),
          item("Corn dogs", "overstock"),
          item("White Castle sliders", "overstock"),
          item("Ground meat or roast", "verify")
        ]
      },
      {
        name: "Vegetables / Sides",
        items: [
          item("Cauliflower rice", "overstock"),
          item("Cauliflower florets", "overstock"),
          item("Edamame", "overstock"),
          item("Sweet peas", "overstock"),
          item("Butternut squash", "overstock"),
          item("Organic vegetable blend", "overstock")
        ]
      }
    ],
    door: [
      {
        name: "Treats",
        items: [
          item("Outshine mini fruit pops", "check"),
          item("Snack brighter fruit pops", "check"),
          item("Vanilla ice cream", "check")
        ]
      }
    ]
  },
  pantry: {
    title: "Pantry",
    kicker: "Shelf-stable inventory",
    summary:
      "The pantry is heavily stocked after the Walmart cart: pasta, sauces, canned goods, cereal, snacks, rice, and convenience sides should be used before restocking.",
    tone: "pantry",
    groups: [
      {
        name: "Grains / Pasta / Rice",
        items: [
          item("Angel hair spaghetti", "overstock"),
          item("Lasagna noodles", "overstock"),
          item("Long grain rice", "overstock"),
          item("Spaghetti", "overstock"),
          item("Penne / rigatoni / rotini", "overstock"),
          item("Elbows / shells", "overstock"),
          item("Colored pasta", "overstock"),
          item("Rice noodles", "check"),
          item("Quinoa and brown rice pouches", "overstock"),
          item("Instant oatmeal", "overstock"),
          item("Pancake mix", "check"),
          item("Popcorn", "overstock")
        ]
      },
      {
        name: "Canned / Jarred",
        items: [
          item("Black beans", "overstock"),
          item("Baked beans", "check"),
          item("Red beans", "overstock"),
          item("Pinto beans", "overstock"),
          item("Green beans", "overstock"),
          item("Mixed vegetables", "overstock"),
          item("Canned spaghetti rings", "check"),
          item("Evaporated milk", "check"),
          item("Blueberry pie filling", "check"),
          item("Almond butter", "overstock"),
          item("Hunt's pasta sauce", "overstock"),
          item("Prego Alfredo", "overstock"),
          item("Thick/chunky salsa", "overstock")
        ]
      },
      {
        name: "Snacks",
        items: [
          item("Buldak ramen", "overstock"),
          item("Instant noodles", "overstock"),
          item("Ancient grains cereal", "check"),
          item("Froot Loops", "overstock"),
          item("Apple Jacks", "overstock"),
          item("Mixed fruit cups", "overstock"),
          item("Tortilla chips", "check"),
          item("Blueberry muffins", "use-first"),
          item("Gerber biscuits", "check"),
          item("Yogurt bites", "check"),
          item("Fruit/protein pouches", "check"),
          item("Honey graham crackers", "check"),
          item("Chips / crackers", "overstock"),
          item("Snack box packets", "overstock")
        ]
      },
      {
        name: "Counter / Bread / Baby",
        items: [
          item("Hot dog buns", "check", { brand: "Great Value", brandType: "store-brand" }),
          item("Sliced bread", "check", { brand: "Sara Lee Artesano", brandType: "brand" }),
          item("Tortillas", "check", { brand: "Great Value", brandType: "store-brand" }),
          item("Blueberry muffins", "use-first", { brand: "Marketside", brandType: "store-brand" }),
          item("Gerber biscuits", "check", { brand: "Gerber", brandType: "brand" }),
          item("Toddler fruit pouches", "check"),
          item("Toddler yogurt bites", "check"),
          item("Goldfish crackers", "check", { brand: "Goldfish", brandType: "brand" })
        ]
      },
      {
        name: "Convenience Sides",
        items: [
          item("Velveeta shells and cheese", "overstock"),
          item("Knorr pasta sides", "overstock"),
          item("Tuna Helper", "check"),
          item("Crescent rolls", "check"),
          item("Cinnamon rolls", "check"),
          item("Cake or dessert mix", "verify"),
          item("Extra bread/tortilla overflow", "check")
        ]
      }
    ]
  }
};

const tripBias = [
  "Receipt captured: 65 items, $177.58 subtotal, $183.79 total",
  "Put-away photos captured for pantry, fridge, freezer, and counter overflow",
  "Use strawberries, bananas, avocado, tomatoes, cucumbers, and greens first",
  "Plan chicken thighs and ground beef before leaning on freezer meals",
  "Avoid pasta, pasta sauce, canned goods, cereal, and cheese next trip",
  "Use kid convenience foods as backup meals, not the default"
];

const gaps = [
  item("Milk / eggs count", "gap")
];

const photos = [
  photo("Put-away counter bread and baby snacks", "../grocery-inventory/photos/2026-05-18-put-away/01-counter-bread-baby-snacks.jpg"),
  photo("Put-away pantry after restock", "../grocery-inventory/photos/2026-05-18-put-away/02-pantry-after-restock.jpg"),
  photo("Put-away fridge and freezer after restock", "../grocery-inventory/photos/2026-05-18-put-away/03-fridge-freezer-after-restock.jpg"),
  photo("Fridge door condiments", "../grocery-inventory/photos/2026-05-17-fridge-inventory/03-fridge-door-condiments-sauces.jpg"),
  photo("Fridge top shelf", "../grocery-inventory/photos/2026-05-17-fridge-inventory/06-fridge-top-shelf.jpg"),
  photo("Fridge cheese and lettuce", "../grocery-inventory/photos/2026-05-17-fridge-inventory/09-fridge-cheese-lettuce.jpg"),
  photo("Fridge produce drawer", "../grocery-inventory/photos/2026-05-17-fridge-inventory/10-fridge-produce-drawer.jpg"),
  photo("Chest freezer", "../grocery-inventory/photos/2026-05-17-initial-inventory/01-chest-freezer.jpg"),
  photo("Freezer floor inventory", "../grocery-inventory/photos/2026-05-17-initial-inventory/08-freezer-floor-inventory.jpg"),
  photo("Upright freezer", "../grocery-inventory/photos/2026-05-17-initial-inventory/09-upright-freezer.jpg"),
  photo("Pantry door", "../grocery-inventory/photos/2026-05-17-initial-inventory/02-pantry-door.jpg"),
  photo("Pantry pasta and rice", "../grocery-inventory/photos/2026-05-17-initial-inventory/06-pantry-pasta-rice.jpg"),
  photo("Pantry snacks", "../grocery-inventory/photos/2026-05-17-initial-inventory/05-pantry-snacks-ramen.jpg"),
  photo("Walmart cart pantry", "../grocery-inventory/cart-photos/2026-05-17-walmart-cart/01-pantry-pasta-cereal-cans.jpg"),
  photo("Walmart cart produce top", "../grocery-inventory/cart-photos/2026-05-17-walmart-cart/02-produce-top.jpg"),
  photo("Walmart cart produce", "../grocery-inventory/cart-photos/2026-05-17-walmart-cart/03-produce-snacks.jpg"),
  photo("Walmart cart proteins", "../grocery-inventory/cart-photos/2026-05-17-walmart-cart/04-proteins-dairy-convenience.jpg"),
  photo("Walmart cart kid snacks", "../grocery-inventory/cart-photos/2026-05-17-walmart-cart/05-kid-baby-snacks-frozen.jpg"),
  photo("Walmart receipt", "../grocery-inventory/receipts/2026-05-17-walmart-receipt.jpg")
];

const params = new URLSearchParams(window.location.search);
const initialZone = params.get("zone") || params.get("view");
const tabs = ["home", "fridge", "freezer", "pantry", "photos"];

const state = {
  tab: tabs.includes(initialZone) ? initialZone : "home",
  query: "",
  statusFilter: null
};

const inventoryView = document.querySelector("#inventoryView");
const searchInput = document.querySelector("#searchInput");
const zoneTitle = document.querySelector("#zoneTitle");
const zoneKicker = document.querySelector("#zoneKicker");
const zoneSummary = document.querySelector("#zoneSummary");
const useFirstCount = document.querySelector("#useFirstCount");
const overstockCount = document.querySelector("#overstockCount");
const gapCount = document.querySelector("#gapCount");
const tripBiasList = document.querySelector("#tripBias");

function item(name, status = "check", metadata = {}) {
  return { name, status, ...metadata };
}

function photo(name, src) {
  return { name, src };
}

function allSections(zoneId) {
  const zone = zones[zoneId];
  if (!zone) return [];
  return [...(zone.shelves || zone.groups || []), ...(zone.door || [])];
}

function allItems() {
  return [...Object.keys(zones).flatMap((zoneId) => allSections(zoneId).flatMap((section) => section.items)), ...gaps];
}

function zoneItems(zoneId) {
  return allSections(zoneId).flatMap((section) => section.items);
}

function matchesQuery(entry) {
  if (state.statusFilter && entry.status !== state.statusFilter) return false;
  if (!state.query) return true;

  return [entry.name, entry.brand, entry.brandType, statusLabel(entry.status), itemKind(entry)]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(state.query));
}

function matchesPhoto(entry) {
  if (!state.query) return true;
  return entry.name.toLowerCase().includes(state.query);
}

function statusClass(status) {
  if (status === "use-first") return "use-first";
  if (status === "overstock") return "overstock";
  if (status === "gap") return "gap";
  if (status === "verify") return "verify";
  return "check";
}

function itemKind(entry) {
  const name = entry.name.toLowerCase();

  if (/(romaine|lettuce|onion|spinach|spring mix|cucumber|potato|broccoli|banana|strawberr|apple|avocado|pepper|tomato|green bean|lemon|greens)/.test(name)) return "produce";
  if (/(milk|egg|yogurt|sour cream|feta|cheese|butter|hummus|dip)/.test(name)) return "dairy";
  if (/(chicken|beef|bacon|ham|shrimp|hot dog|sausage|salmon|tender|nugget|corn dog|meat|roast)/.test(name)) return "protein";
  if (/(ketchup|mayo|mustard|ranch|hot sauce|sriracha|barbecue|lemon juice|spread|sauce)/.test(name)) return "bottle";
  if (/(salsa|pickle|gherkin|jalapeno|garlic)/.test(name)) return "jar";
  if (/(leftover|foil|container|sweet potato)/.test(name)) return "leftover";
  if (/(pizza|lasagna|ravioli|wonton|meal|orange chicken)/.test(name)) return "meal";
  if (/(cauliflower|edamame|peas|squash|vegetable|fruit pop|ice cream)/.test(name)) return "frozen";
  if (/(bagel|roll|bun|bread|tortilla|muffin|biscuit)/.test(name)) return "bread";
  if (/(pasta|spaghetti|penne|rigatoni|rotini|elbow|shell|noodle|rice|oatmeal|popcorn|pancake)/.test(name)) return "box";
  return "staple";
}

function sectionKind(name) {
  const label = name.toLowerCase();
  if (/(produce|vegetables|sides)/.test(label)) return "produce";
  if (/(protein|prepared|leftover|ready meals)/.test(label)) return "protein";
  if (/(dairy|egg|cheese|treats)/.test(label)) return "dairy";
  if (/(counter|bread|baby|snacks)/.test(label)) return "snack";
  if (/(canned|jarred|sauce)/.test(label)) return "pantry";
  return "mixed";
}

function statusLabel(status) {
  if (status === "use-first") return "Use first";
  if (status === "overstock") return "Do not buy";
  if (status === "gap") return "Gap";
  if (status === "verify") return "Verify";
  return "On hand";
}

function statusSummary() {
  if (state.statusFilter === "use-first") return "Showing use-first items only. Tap Use First again to clear.";
  if (state.statusFilter === "overstock") return "Showing do-not-buy items only. Tap Do Not Buy again to clear.";
  if (state.statusFilter === "gap") return "Showing known gaps only. Tap Gaps again to clear.";
  return "";
}

function renderChip(entry) {
  const chip = document.createElement("span");
  const kind = itemKind(entry);
  chip.className = `item-chip ${statusClass(entry.status)}`.trim();
  chip.dataset.kind = kind;
  chip.dataset.status = entry.status;

  const mark = document.createElement("span");
  mark.className = "item-mark";
  mark.setAttribute("aria-hidden", "true");

  const body = document.createElement("span");
  body.className = "item-body";

  const label = document.createElement("span");
  label.className = "item-label";
  label.textContent = entry.name;

  const meta = document.createElement("span");
  meta.className = "item-meta";
  meta.textContent = itemMeta(entry);

  body.append(label, meta);
  chip.append(mark, body);
  chip.title = [statusLabel(entry.status), entry.brand ? `${entry.brandType === "store-brand" ? "Store brand" : "Brand"}: ${entry.brand}` : ""]
    .filter(Boolean)
    .join(" | ");

  const wrapper = document.createElement("li");
  wrapper.appendChild(chip);
  return wrapper;
}

function itemMeta(entry) {
  const parts = [statusLabel(entry.status)];
  if (entry.brandType) parts.push(entry.brandType === "store-brand" ? "store brand" : "brand");
  return parts.join(" / ");
}

function renderSectionCount(count) {
  const countNode = document.createElement("span");
  countNode.className = "section-count";
  countNode.textContent = `${count} ${count === 1 ? "item" : "items"}`;
  return countNode;
}

function setFilterButtons() {
  document.querySelectorAll("[data-status-filter]").forEach((button) => {
    const active = button.dataset.statusFilter === state.statusFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderShelf(section, className = "food-card") {
  const visibleItems = section.items.filter(matchesQuery);
  if (!visibleItems.length) return null;

  const shelf = document.createElement("section");
  shelf.className = `${className} section-${sectionKind(section.name)}`;
  shelf.dataset.sectionKind = sectionKind(section.name);

  const heading = document.createElement("h3");
  const title = document.createElement("span");
  title.className = "section-title";
  title.textContent = section.name;
  heading.append(title, renderSectionCount(visibleItems.length));

  const list = document.createElement("ul");
  list.className = "item-list";
  visibleItems.forEach((entry) => list.appendChild(renderChip(entry)));

  shelf.append(heading, list);
  return shelf;
}

function renderHome() {
  const home = document.createElement("div");
  home.className = "hub-home";

  home.append(renderStatusTiles(), renderZoneOverview(), renderPriorityBoard());
  return home;
}

function renderStatusTiles() {
  const total = allItems().length;
  const useFirst = allItems().filter((entry) => entry.status === "use-first").length;
  const overstock = allItems().filter((entry) => entry.status === "overstock").length;

  const grid = document.createElement("section");
  grid.className = "hub-grid";
  grid.setAttribute("aria-label", "Quick actions");

  [
    {
      label: "Food List",
      value: total,
      detail: "All zones",
      icon: "food-list",
      action: () => setTab("fridge")
    },
    {
      label: "Use First",
      value: useFirst,
      detail: "Eat soon",
      icon: "use-first",
      action: () => setStatusFilter("use-first")
    },
    {
      label: "Do Not Buy",
      value: overstock,
      detail: "Skip next trip",
      icon: "do-not-buy",
      action: () => setStatusFilter("overstock")
    },
    {
      label: "View Inside",
      value: photos.length,
      detail: "Photos + receipt",
      icon: "photos",
      action: () => setTab("photos")
    }
  ].forEach((tile) => grid.appendChild(renderHubTile(tile)));

  return grid;
}

function renderHubTile(tile) {
  const button = document.createElement("button");
  button.className = `hub-tile tile-${tile.icon}`;
  button.type = "button";
  button.addEventListener("click", tile.action);

  const icon = document.createElement("span");
  icon.className = `tile-icon icon-${tile.icon}`;
  icon.setAttribute("aria-hidden", "true");

  const content = document.createElement("span");
  content.className = "tile-content";

  const label = document.createElement("span");
  label.className = "tile-label";
  label.textContent = tile.label;

  const value = document.createElement("strong");
  value.textContent = tile.value;

  const detail = document.createElement("span");
  detail.className = "tile-detail";
  detail.textContent = tile.detail;

  content.append(label, value, detail);
  button.append(icon, content);
  return button;
}

function renderZoneOverview() {
  const panel = document.createElement("section");
  panel.className = "zone-overview";

  const header = renderPanelHeader("Storage zones", "Tap a zone to inspect the food list.");
  const grid = document.createElement("div");
  grid.className = "zone-card-grid";

  Object.entries(zones).forEach(([zoneId, zone]) => {
    const entries = zoneItems(zoneId);
    const visibleEntries = entries.filter(matchesQuery);
    const button = document.createElement("button");
    button.className = `zone-card zone-${zoneId}`;
    button.type = "button";
    button.addEventListener("click", () => setTab(zoneId));

    const icon = document.createElement("span");
    icon.className = `zone-icon zone-icon-${zoneId}`;
    icon.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "zone-card-label";
    label.textContent = zone.title;

    const count = document.createElement("strong");
    count.textContent = `${visibleEntries.length}`;

    const detail = document.createElement("span");
    detail.className = "zone-card-detail";
    detail.textContent = zone.summary;

    const chips = document.createElement("span");
    chips.className = "zone-status-chips";
    chips.append(
      renderMiniStatus("Use first", entries.filter((entry) => entry.status === "use-first").length, "use-first"),
      renderMiniStatus("Do not buy", entries.filter((entry) => entry.status === "overstock").length, "overstock")
    );

    button.append(icon, label, count, detail, chips);
    grid.appendChild(button);
  });

  panel.append(header, grid);
  return panel;
}

function renderMiniStatus(label, count, status) {
  const chip = document.createElement("span");
  chip.className = `mini-status ${status}`;
  chip.textContent = `${count} ${label}`;
  return chip;
}

function renderPriorityBoard() {
  const board = document.createElement("section");
  board.className = "priority-board";

  const useFirst = allItems()
    .filter((entry) => entry.status === "use-first")
    .filter(matchesQuery)
    .slice(0, 10);
  const doNotBuy = allItems()
    .filter((entry) => entry.status === "overstock")
    .filter(matchesQuery)
    .slice(0, 10);

  board.append(
    renderListPanel("Use first", "Put these in front of the week.", useFirst),
    renderListPanel("Do not buy", "Already stocked enough.", doNotBuy)
  );

  return board;
}

function renderListPanel(title, subtitle, entries) {
  const panel = document.createElement("section");
  panel.className = "panel-card list-panel";
  panel.appendChild(renderPanelHeader(title, subtitle));

  const list = document.createElement("ul");
  list.className = "item-list compact";
  entries.forEach((entry) => list.appendChild(renderChip(entry)));

  panel.appendChild(entries.length ? list : emptyState("Nothing matching right now."));
  return panel;
}

function renderPanelHeader(title, subtitle) {
  const header = document.createElement("div");
  header.className = "panel-header";

  const titleNode = document.createElement("h3");
  titleNode.textContent = title;

  const subtitleNode = document.createElement("p");
  subtitleNode.textContent = subtitle;

  header.append(titleNode, subtitleNode);
  return header;
}

function renderZone(zoneId) {
  const zone = zones[zoneId];
  const view = document.createElement("div");
  view.className = `food-list-view view-${zoneId}`;

  const actionBar = document.createElement("section");
  actionBar.className = "view-actions panel-card";
  actionBar.append(
    renderViewAction("Add / scan", "Receipt lookup and barcode capture will feed this list."),
    renderViewAction("Meal ideas", "Prefer use-first produce and fresh proteins."),
    renderViewAction("Shopping check", "Avoid the do-not-buy groups before trips.")
  );

  const grid = document.createElement("div");
  grid.className = "food-section-grid";
  allSections(zoneId).forEach((section) => {
    const card = renderShelf(section);
    if (card) grid.appendChild(card);
  });

  view.append(actionBar, renderPhotoStrip(zoneId), grid.children.length ? grid : emptyState());
  return view;
}

function renderViewAction(label, detail) {
  const action = document.createElement("div");
  action.className = "view-action";

  const title = document.createElement("strong");
  title.textContent = label;

  const text = document.createElement("span");
  text.textContent = detail;

  action.append(title, text);
  return action;
}

function renderPhotoStrip(zoneId) {
  const related = photos.filter((entry) => {
    const name = entry.name.toLowerCase();
    if (zoneId === "fridge") return name.includes("fridge") || name.includes("put-away");
    if (zoneId === "freezer") return name.includes("freezer") || name.includes("put-away");
    return name.includes("pantry") || name.includes("counter") || name.includes("walmart cart");
  }).slice(0, 5);

  const strip = document.createElement("section");
  strip.className = "photo-strip";
  strip.setAttribute("aria-label", `${zones[zoneId].title} reference photos`);

  related.forEach((entry) => {
    const link = document.createElement("a");
    link.className = "photo-chip";
    link.href = entry.src;

    const image = document.createElement("img");
    image.src = entry.src;
    image.alt = entry.name;
    image.loading = "lazy";

    const label = document.createElement("span");
    label.textContent = entry.name;

    link.append(image, label);
    strip.appendChild(link);
  });

  return related.length ? strip : emptyState("No matching photos.");
}

function renderPhotos() {
  const grid = document.createElement("div");
  grid.className = "photo-grid";

  photos
    .filter((entry) => matchesPhoto(entry))
    .forEach((entry) => {
      const link = document.createElement("a");
      link.className = "photo-tile";
      link.href = entry.src;

      const image = document.createElement("img");
      image.src = entry.src;
      image.alt = entry.name;
      image.loading = "lazy";

      const label = document.createElement("span");
      label.textContent = entry.name;

      link.append(image, label);
      grid.appendChild(link);
    });

  if (!grid.children.length) return emptyState("No matching photos.");
  return grid;
}

function renderGaps() {
  const shelf = renderShelf({ name: "Known gaps", items: gaps }, "food-card gap-bin");
  return shelf || emptyState("No matching gaps.");
}

function emptyState(text = "No matching items.") {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = text;
  return empty;
}

function setActiveButtons() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.tab);
  });
}

function renderMetrics() {
  const entries = allItems();
  useFirstCount.textContent = entries.filter((entry) => entry.status === "use-first").length;
  overstockCount.textContent = entries.filter((entry) => entry.status === "overstock").length;
  gapCount.textContent = gaps.length;
  setFilterButtons();

  tripBiasList.replaceChildren();
  tripBias.forEach((text) => {
    const itemNode = document.createElement("li");
    itemNode.textContent = text;
    tripBiasList.appendChild(itemNode);
  });
}

function setTab(tab) {
  state.tab = tab;
  if (tab !== "home") state.statusFilter = state.statusFilter === "gap" ? null : state.statusFilter;
  render();
}

function setStatusFilter(status) {
  state.statusFilter = state.statusFilter === status ? null : status;
  render();
}

function render() {
  setActiveButtons();
  renderMetrics();
  inventoryView.replaceChildren();

  if (state.statusFilter === "gap") {
    zoneTitle.textContent = "Gaps";
    zoneKicker.textContent = "Missing detail";
    zoneSummary.textContent = statusSummary();
    inventoryView.appendChild(renderGaps());
    return;
  }

  if (state.tab === "home") {
    zoneTitle.textContent = "Home";
    zoneKicker.textContent = "Smart fridge panel";
    zoneSummary.textContent = ["Fast scan of what to use, what not to buy, and where to inspect next.", statusSummary()].filter(Boolean).join(" ");
    inventoryView.appendChild(renderHome());
    return;
  }

  if (state.tab === "photos") {
    zoneTitle.textContent = "Photos";
    zoneKicker.textContent = "View inside";
    zoneSummary.textContent = "Open a tile to inspect the original inventory photo.";
    inventoryView.appendChild(renderPhotos());
    return;
  }

  const zone = zones[state.tab];
  zoneTitle.textContent = zone.title;
  zoneKicker.textContent = zone.kicker;
  zoneSummary.textContent = [zone.summary, statusSummary()].filter(Boolean).join(" ");
  inventoryView.appendChild(renderZone(state.tab));
}

document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    setTab(button.dataset.tab);
  });
});

document.querySelectorAll("[data-status-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    setStatusFilter(button.dataset.statusFilter);
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

render();
