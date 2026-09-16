# Chicken ERP

Production-oriented poultry enterprise resource planning for Kenya and African poultry businesses.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Supabase PostgreSQL, Auth, Storage and Realtime
- Zod-ready service boundaries
- Mobile-friendly navigation shell
- Vercel-ready deployment

## Modules

1. Organizations, users, roles and permissions
2. Farms, houses and capacity
3. Flocks and flock lifecycle
4. Daily operations, mortality, weights and observations
5. Feed inventory and consumption
6. Veterinary health, vaccination, treatment and disease incidents
7. Egg production and grading
8. Inventory and stock ledger
9. Suppliers and purchasing (with line items)
10. Customers, sales, payments and deliveries
11. Expenses and financial transactions
12. Employees
13. Notifications, tasks and audit logs
14. Management analytics

## Architecture rule

Business events update the operational ledger rather than overwriting balances directly. Mortality reduces flock population through a controlled trigger. Stock is represented by immutable movements.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The UI runs on realistic mock data until Supabase is connected.

Create a Supabase project, then apply `supabase/migrations/0001_initial_schema.sql` in the SQL editor or through your migration workflow.

## Environment variables

See `.env.example`. Never expose a Supabase service role key in the browser.

## Documentation

- `docs/BUILD_PLAN.md` - phased delivery plan
- `docs/ERD.md` - entity relationships
- `docs/RBAC.md` - role matrix
- `docs/API_SPEC.md` - API conventions
- `docs/SECURITY.md` - security checklist
- `docs/MOBILE_WORKFLOWS.md` - field workflows
- `docs/FINANCE_MODEL.md` - cost and margin model
- `docs/ALERTS.md` - operational alerts
- `docs/IMPLEMENTATION_NOTES.md` - deployment notes

## Production roadmap

1. Foundation and security
2. Poultry operations
3. Inventory
4. Sales and purchasing
5. Finance
6. Analytics
7. Mobile and offline
8. AI assistance

## License

Private project. All rights reserved.
