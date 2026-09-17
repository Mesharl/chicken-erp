# Chicken ERP

Production-oriented poultry farm management software for a single farm account.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Supabase PostgreSQL, Auth, Storage and Realtime
- Zod-ready service boundaries
- Mobile-friendly navigation shell
- Vercel-ready deployment

## Product scope

The system is designed around one farm and its day-to-day operations:

1. Farm and house setup
2. Flocks and flock lifecycle
3. Daily operations, mortality, weights and observations
4. Feed inventory and consumption
5. Veterinary health, vaccination, treatment and disease incidents
6. Egg production and grading
7. Inventory and stock ledger
8. Suppliers and purchasing
9. Customers, sales, payments and deliveries
10. Expenses and financial transactions
11. Employees and access
12. Notifications, tasks and audit logs
13. Management reports

The application starts with an empty operational state. It does not ship with fabricated farms, flocks, employees, sales, purchases, stock, production or health records.

## Architecture rule

Business events update the operational ledger rather than overwriting balances directly. Mortality reduces flock population through a controlled trigger. Stock is represented by immutable movements.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Connect Supabase before entering real farm data.

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
2. Farm setup and poultry operations
3. Inventory
4. Sales and purchasing
5. Finance
6. Reports
7. Mobile and offline workflows
8. Optional AI assistance

## License

Private project. All rights reserved.
