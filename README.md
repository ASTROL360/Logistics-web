# Swift Logistics

Swift Logistics is a Next.js logistics website and shipment management app. This README tracks both how to run the project and its progress toward a real, revenue-generating service. Update the progress section whenever a milestone is completed.

## Current Progress

**Overall stage: working MVP foundation**  
**Next milestone: Step 1 — secure admin access and shipment management APIs**

### Completed

- Public marketing pages and shipment tracking page.
- PostgreSQL database connected through Prisma, with the initial migration applied.
- Shipment creation form with required-field and number validation.
- Shipment list page backed by PostgreSQL.
- Tracking lookup by tracking code, including the initial shipment status update.
- Creation confirmation that shows the new tracking code.
- Manually checked the shipment list, create, and tracking API success and error paths.

### Product Roadmap

Work through these steps in order. Complete one milestone, verify it, and record the result here before moving to the next.

1. **Secure the admin area and write APIs — NEXT**
   - Add admin sign-in and sign-out.
   - Require an authenticated admin session for admin pages and shipment creation or management APIs.
   - Keep public shipment tracking available while limiting exposed customer information.
2. **Build the delivery operations workflow**
   - Add shipment status updates and an operations view.
   - Add driver or delivery-partner assignment and capture delivery completion details.
3. **Set service areas and pricing rules**
   - Define supported pickup and delivery areas and how delivery prices are calculated.
   - Keep business rates configurable rather than hard-coded into the page.
4. **Add customer quotes and booking**
   - Let a customer enter delivery details, see a price, and submit a booking.
   - Show a clear confirmation and tracking code after the booking is accepted.
5. **Add payments and business invoicing**
   - Connect a payment provider after the service, pricing, and booking flow are defined.
   - Add payment state, receipts, invoices, and failure handling.
6. **Add customer and operations notifications**
   - Send booking confirmations and status updates by the chosen channels.
7. **Prepare for production**
   - Add automated tests for important flows, review access and data handling, configure backups and monitoring, and deploy.

### Progress Log

- **2026-11-02:** PostgreSQL migration applied; Prisma client generated; shipment create/list and tracking endpoints manually exercised. Admin authentication is the next milestone.

## Run Locally

### Requirements

- Node.js and npm.
- PostgreSQL running locally or a reachable PostgreSQL database.

### Setup

1. Install packages:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set `DATABASE_URL` to your PostgreSQL connection string. Keep `.env` private; it is ignored by Git.

3. Generate Prisma Client and apply database migrations:

   ```bash
   npm run db:generate
   npm run db:migrate
   ```

4. Start the local server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

If port 3000 is already in use, use the existing local server or stop it with `Ctrl+C` in the terminal where it is running before starting another one.

## API Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/shipments` | List shipments |
| `POST` | `/api/shipments` | Create a shipment |
| `GET` | `/api/track/{code}` | Look up a shipment and its status history |

The route handlers are in `src/app/api/`.

## Useful Database Commands

```bash
npm run db:generate
npm run db:migrate
npm run db:deploy
```

Use `db:migrate` while developing schema changes. Use `db:deploy` to apply already-created migrations in a production environment.
