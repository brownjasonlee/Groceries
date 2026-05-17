# Household Grocery Ops

This repo tracks the grocery baseline, pantry/freezer photos, receipts, and weekly reset notes.

Current setup date: 2026-05-17

## Files

- [Current inventory](grocery-inventory/current-inventory.md)
- [Walmart baseline list](grocery-inventory/walmart-baseline-list.md)
- [Operating system](grocery-inventory/operating-system.md)
- [Virtual fridge display](virtual-fridge/index.html)
- [Initial inventory photos](grocery-inventory/photos/2026-05-17-initial-inventory/)

## Virtual Fridge

Local file:

- [Virtual fridge](virtual-fridge/index.html)

GitHub Pages URL after Pages is enabled:

- `https://brownjasonlee.github.io/Groceries/`

## Validation And Deploy

Local validation:

```sh
npm test
```

GitHub Actions:

- `.github/workflows/ci.yml` validates the virtual fridge on pushes and pull requests.
- `.github/workflows/pages.yml` validates and deploys the static site to GitHub Pages on every push to `main`.

## GitHub Pages Setup

After this repo is pushed to GitHub:

1. Open `https://github.com/brownjasonlee/Groceries`.
2. Go to `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Go to `Actions`.
6. If GitHub asks to enable workflows for the repository, enable them.
7. Open the `Deploy GitHub Pages` workflow and confirm the latest run succeeds.
8. Visit `https://brownjasonlee.github.io/Groceries/`.

## How to use this going forward

1. Before shopping, take quick photos of fridge, freezer, pantry, and any overflow shelves.
2. After shopping, save receipt photos in `grocery-inventory/receipts/`.
3. Save cart photos in `grocery-inventory/cart-photos/`.
4. Update the inventory notes with what was used up, restocked, or discovered.
5. Keep the weekly list focused on staples, easy meals, kid lunches/snacks, and baby-safe foods.
