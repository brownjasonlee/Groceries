# Receipt Intake

Receipt photos are saved here, with structured item data in `data/`.

## Current Mechanism

1. Save the receipt image in this folder.
2. Extract the receipt transaction metadata and item lines into `data/YYYY-MM-DD-store.json`.
3. Run `npm run receipts` or `npm test`.
4. The receipt verifier checks:
   - item count matches `itemsSold`
   - item prices sum to subtotal
   - subtotal plus tax equals total
   - required line fields are present
5. The verifier writes `receipt-summary.json`, which can be used by the virtual fridge or future reports.
6. The renderer writes a readable Markdown receipt from the structured JSON.

## Barcode / QR Note

The receipt barcode and TC number identify the Walmart transaction, but they do not provide a dependable unauthenticated item-list API from this repo. If a local barcode/OCR tool is added later, it should populate the same JSON schema and still pass the verifier before commit.
