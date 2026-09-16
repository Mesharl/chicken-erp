# Entity relationship overview

## Core tenancy
- organizations
- profiles (auth.users)
- organization_members (role per org)

## Operations
- farms -> houses
- breeds
- flocks (farm, house, breed, population)
- flock_daily_records
- mortality_records (triggers population decrease)
- weight_records
- egg_collections
- feed_products / feed_consumption
- vaccinations / treatments / disease_incidents

## Inventory
- inventory_items
- stock_movements (immutable ledger)

## Commercial
- suppliers
- purchase_orders / purchase_order_lines
- customers
- sales_orders / sales_order_lines
- payments

## Finance and people
- expenses
- employees
- notifications
- tasks
- audit_logs

All business tables are scoped by organization_id and protected by RLS.
