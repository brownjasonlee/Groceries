const zones = {
  fridge: {
    title: "Fridge",
    kicker: "Cold inventory",
    summary:
      "Condiments, sauces, jars, cheese, and leftovers are the crowded areas. Fresh fruit, lunch protein, and baby-safe snacks are better buys.",
    tone: "fridge",
    shelves: [
      {
        name: "Dairy / Eggs / Cheese",
        items: [
          item("Kirkland milk, partial gallon", "check"),
          item("Eggs, visible carton", "check"),
          item("Feta crumbles", "overstock"),
          item("String cheese", "overstock"),
          item("Mozzarella cheese", "overstock"),
          item("Shredded cheddar", "overstock"),
          item("Velveeta slices", "overstock"),
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
          item("Baby spinach", "use-first"),
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
          item("Sriracha-style sauce", "overstock")
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
      "There are enough freezer rescue meals and frozen vegetables to cover several pressure nights before restocking.",
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
      "The pantry is stocked with carbs, beans, oatmeal, ramen, snacks, and almond butter. Buy fresh items before more shelf-stable food.",
    tone: "pantry",
    groups: [
      {
        name: "Grains / Pasta / Rice",
        items: [
          item("Angel hair spaghetti", "overstock"),
          item("Lasagna noodles", "overstock"),
          item("Colored pasta", "check"),
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
          item("Green beans", "overstock"),
          item("Canned spaghetti rings", "check"),
          item("Evaporated milk", "check"),
          item("Blueberry pie filling", "check"),
          item("Almond butter", "overstock")
        ]
      },
      {
        name: "Snacks",
        items: [
          item("Buldak ramen", "overstock"),
          item("Instant noodles", "overstock"),
          item("Ancient grains cereal", "check"),
          item("Honey graham crackers", "check"),
          item("Chips / crackers", "overstock"),
          item("Snack box packets", "overstock")
        ]
      }
    ]
  }
};

const tripBias = [
  "Fresh fruit and soft baby-safe produce",
  "Bread or tortillas",
  "Lunch meat or another easy protein",
  "Yogurt if baby/kids are eating it",
  "Milk and eggs only after checking counts"
];

const gaps = [
  item("Fresh fruit", "gap"),
  item("Baby-safe snacks", "gap"),
  item("Bread / tortillas", "gap"),
  item("Lunch protein", "gap")
];

const photos = [
  photo("Fridge door condiments", "../grocery-inventory/photos/2026-05-17-fridge-inventory/03-fridge-door-condiments-sauces.jpg"),
  photo("Fridge top shelf", "../grocery-inventory/photos/2026-05-17-fridge-inventory/06-fridge-top-shelf.jpg"),
  photo("Fridge cheese and lettuce", "../grocery-inventory/photos/2026-05-17-fridge-inventory/09-fridge-cheese-lettuce.jpg"),
  photo("Fridge produce drawer", "../grocery-inventory/photos/2026-05-17-fridge-inventory/10-fridge-produce-drawer.jpg"),
  photo("Chest freezer", "../grocery-inventory/photos/2026-05-17-initial-inventory/01-chest-freezer.jpg"),
  photo("Freezer floor inventory", "../grocery-inventory/photos/2026-05-17-initial-inventory/08-freezer-floor-inventory.jpg"),
  photo("Upright freezer", "../grocery-inventory/photos/2026-05-17-initial-inventory/09-upright-freezer.jpg"),
  photo("Pantry door", "../grocery-inventory/photos/2026-05-17-initial-inventory/02-pantry-door.jpg"),
  photo("Pantry pasta and rice", "../grocery-inventory/photos/2026-05-17-initial-inventory/06-pantry-pasta-rice.jpg"),
  photo("Pantry snacks", "../grocery-inventory/photos/2026-05-17-initial-inventory/05-pantry-snacks-ramen.jpg")
];

const state = {
  tab: "fridge",
  query: ""
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

function item(name, status = "check") {
  return { name, status };
}

function photo(name, src) {
  return { name, src };
}

function allItems() {
  const zoneItems = Object.values(zones).flatMap((zone) => {
    const shelves = zone.shelves || zone.groups || [];
    const door = zone.door || [];
    return [...shelves, ...door].flatMap((section) => section.items);
  });

  return [...zoneItems, ...gaps];
}

function matchesQuery(entry) {
  if (!state.query) return true;
  return entry.name.toLowerCase().includes(state.query);
}

function statusClass(status) {
  if (status === "use-first") return "use-first";
  if (status === "overstock") return "overstock";
  if (status === "gap") return "gap";
  return "";
}

function renderChip(entry) {
  const chip = document.createElement("li");
  chip.className = `item-chip ${statusClass(entry.status)}`.trim();
  chip.textContent = entry.name;
  return chip;
}

function renderShelf(section, className = "shelf") {
  const visibleItems = section.items.filter(matchesQuery);
  if (!visibleItems.length) return null;

  const shelf = document.createElement("section");
  shelf.className = className;

  const heading = document.createElement("h3");
  heading.textContent = section.name;

  const count = document.createElement("span");
  count.textContent = `${visibleItems.length}`;
  heading.appendChild(count);

  const list = document.createElement("ul");
  list.className = "item-list";
  visibleItems.forEach((entry) => list.appendChild(renderChip(entry)));

  shelf.append(heading, list);
  return shelf;
}

function renderColdZone(zone) {
  const frame = document.createElement("div");
  frame.className = "fridge-frame";

  const cabinet = document.createElement("div");
  cabinet.className = "cabinet";
  cabinet.style.setProperty("--zone-bg", zone.tone === "freezer" ? "var(--freezer)" : "var(--cold)");

  zone.shelves.forEach((section) => {
    const shelf = renderShelf(section);
    if (shelf) cabinet.appendChild(shelf);
  });

  const door = document.createElement("aside");
  door.className = "door-rack";
  (zone.door || []).forEach((section) => {
    const bin = renderShelf(section, "door-bin");
    if (bin) door.appendChild(bin);
  });

  if (!cabinet.children.length && !door.children.length) {
    frame.appendChild(emptyState());
    return frame;
  }

  if (!door.children.length) {
    door.appendChild(emptyState("No matching door items."));
  }

  frame.append(cabinet, door);
  return frame;
}

function renderPantry(zone) {
  const grid = document.createElement("div");
  grid.className = "pantry-grid";

  zone.groups.forEach((section) => {
    const bin = renderShelf(section, "pantry-bin");
    if (bin) grid.appendChild(bin);
  });

  if (!grid.children.length) return emptyState();
  return grid;
}

function renderPhotos() {
  const grid = document.createElement("div");
  grid.className = "photo-grid";

  photos
    .filter((entry) => matchesQuery(entry))
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

  tripBiasList.replaceChildren();
  tripBias.forEach((text) => {
    const itemNode = document.createElement("li");
    itemNode.textContent = text;
    tripBiasList.appendChild(itemNode);
  });
}

function render() {
  setActiveButtons();
  renderMetrics();
  inventoryView.replaceChildren();

  if (state.tab === "photos") {
    zoneTitle.textContent = "Photos";
    zoneKicker.textContent = "Visual reference";
    zoneSummary.textContent = "Open a tile to inspect the original inventory photo.";
    inventoryView.appendChild(renderPhotos());
    return;
  }

  const zone = zones[state.tab];
  zoneTitle.textContent = zone.title;
  zoneKicker.textContent = zone.kicker;
  zoneSummary.textContent = zone.summary;

  if (state.tab === "pantry") {
    inventoryView.appendChild(renderPantry(zone));
  } else {
    inventoryView.appendChild(renderColdZone(zone));
  }
}

document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    state.tab = button.dataset.tab;
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

render();
