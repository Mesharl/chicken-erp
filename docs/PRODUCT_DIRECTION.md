# Mama Suubi's Farm product direction

The product should behave like a practical farm operating system, not a generic business dashboard.

## What does not make sense yet

1. The dashboard starts empty but does not yet define the exact daily workflow that creates useful farm data.
2. The navigation contains enterprise modules before the core poultry records are fully operational.
3. Farm management should represent one farm for the account. There is no need for a farm switching experience.
4. Production needs poultry specific records. Egg count alone is not enough. The system should capture tray count, individual eggs, grades, cracked or rejected eggs, and collection time where useful.
5. Flock records need a living bird count. The current bird count should be derived from opening birds, mortality, culls, sales, transfers, and adjustments rather than manually typed everywhere.
6. Feed needs stock movement and feed conversion context. A farmer needs to know feed received, feed used, current stock, cost, and consumption per bird or per production unit.
7. Health needs a schedule and history. Vaccination, treatment, dosage, withdrawal period, supplier, batch, and follow up should be structured records.
8. Sales and purchasing need to connect to stock and cash movement. A sale should reduce the relevant stock and record payment status. A purchase should increase stock when received.
9. Finance is currently planned but not represented as a useful daily workflow. Expenses, payments, income, and flock costs should eventually feed a simple profitability view.
10. Reports should answer farm questions rather than display decorative charts. Examples include mortality trend, laying rate, feed consumption, feed cost, sales, expenses, and flock profitability.
11. Alerts should be actionable. Examples include low feed stock, unusual mortality, vaccination due, unpaid sale, overdue purchase, and stock variance.
12. Mobile entry is essential. A farmer should be able to record eggs, mortality, feed, treatment, expenses, and sales quickly from a phone.
13. The interface should use restrained typography, clear hierarchy, compact tables, practical forms, modest corner radius, and no decorative gradients.

## Recommended core workflow

### First setup

1. Create the single farm profile.
2. Add houses or poultry units.
3. Add the first flock.
4. Enter opening bird count, breed, purpose, placement date, and starting age.
5. Add feed items and basic inventory.

### Daily close

The farmer should be able to complete a daily record in a few minutes:

1. Birds alive and mortality.
2. Eggs collected by quantity and grade.
3. Feed issued or consumed.
4. Water or equipment issue when relevant.
5. Health treatment or vaccination when due.
6. Birds sold, culled, or transferred.
7. Cash sales and expenses.

### Dashboard

The dashboard should prioritize:

1. Birds alive.
2. Mortality today and this period.
3. Eggs today and laying rate.
4. Feed used today and current feed stock.
5. Sales today and unpaid sales.
6. Expenses today and this period.
7. Estimated flock or farm margin.
8. Operational alerts requiring action.

## Data rules

The database should be the source of truth. The frontend must not contain operational seed data.

Derived values should be calculated from transactions where possible. Examples are current flock count, inventory balance, egg totals, sales totals, and feed stock.

Every operational record should carry a date and the farm context. Flock records should carry the flock context. Changes to important records should be auditable.

## Build order

1. Authentication and single farm onboarding.
2. Farm, houses, and flocks.
3. Daily flock record.
4. Egg production.
5. Feed and inventory ledger.
6. Health and vaccination.
7. Sales and customers.
8. Purchasing and suppliers.
9. Expenses and simple profitability.
10. Reports and alerts.
11. Mobile first daily entry and offline support.

## Product standard

A feature is not complete when its page renders. It is complete when a farmer can enter the record, the server validates it, the database stores it safely, the relevant totals update, errors are understandable, loading is handled, empty states are useful, and the workflow works on a phone.
