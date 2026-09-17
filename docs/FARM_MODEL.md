# Mama Suubi's Farm product model

## Product direction

Mama Suubi's Farm is a single farm workspace today. The data model should still use a livestock domain so other animal types can be introduced later without rebuilding the application.

## Core hierarchy

Farm
→ House or production area
→ Animal group
→ Daily records

For the first release, the animal group is a poultry flock. Future animal groups can support cattle, goats, sheep or other livestock through an animal species and production type configuration.

## Daily operating loop

1. Open Today.
2. Select the flock or group.
3. Record opening animal count where required.
4. Record mortality, culls, transfers or sales.
5. Record feed or other inputs used.
6. Record production.
7. Record health events and scheduled treatments.
8. Record purchases, expenses and sales.
9. Review exceptions and stock levels.

## Poultry records

A flock should support:

- flock name and code
- species
- breed or strain
- purpose such as layers, broilers or breeders
- house
- placement date
- opening quantity
- current quantity derived from movements
- age calculated from placement date
- mortality and culls
- transfers
- production records
- feed consumption
- health records
- sales
- flock costs and revenue

## Derived figures

Do not ask the farmer to repeatedly type values that can be calculated.

Current animals = opening quantity + received + transfers in - mortality - culls - sales - transfers out

Age = current date - placement date

Daily production rate = production quantity / eligible animals

Mortality rate = mortality quantity / opening or eligible animals, using the selected reporting definition

Feed cost = quantity used × recorded unit cost

Gross margin = sales revenue - direct recorded costs

Every calculated metric should show the period and source records used when practical.

## Inventory ledger

Stock should be movement based. A purchase increases stock. An issue or consumption record decreases stock. Adjustments require a reason. The current balance is calculated from movements rather than maintained as an unrelated number.

Initial inventory categories should include feed, veterinary products, packaging, cleaning supplies, equipment and other farm supplies.

## Production

The first production workflow is poultry egg collection. It should allow the farmer to record date, flock, collection quantity, trays where applicable, rejected or damaged quantity, grade and notes.

The model should not hard code eggs into the overall livestock architecture. Future species can add milk, weight gain, offspring, wool or other production measures through configurable production types.

## Health

Health records should support an event date, animal group, event type, product or treatment, quantity, provider or source, notes and withdrawal end date where applicable. Scheduled health events should be visible before they are due.

## Commercial records

Sales should support products from the farm, customer, quantity, unit price, total, payment status and date.

Purchases should support supplier, item, quantity, unit cost, total, payment status and date.

Finance should derive income and expenses from these operational transactions rather than requiring duplicate manual entry.

## Reports

Reports should answer farm questions, including:

- current animal count
- mortality trend
- production trend
- feed usage and cost
- sales and expenses
- stock position
- flock performance
- flock profitability
- health schedule

Reports must never display sample values when the farm has no records.

## Future animal expansion

The application should keep animal species configurable. Poultry remains the primary workflow and vocabulary in the first release. A future livestock module can introduce new species, housing models, production measures, feed units, health events and sale products without changing the farm account model.

The navigation should therefore avoid concepts that only make sense for poultry at the global level. Poultry specific workflows such as Eggs can remain under Production, while the underlying records use a generic livestock structure.

## Product rules

- One account owns one farm workspace.
- No fabricated operational data.
- Every operational record belongs to the authenticated farm account.
- No duplicated derived totals stored as independent truth unless required for performance and protected by reconciliation.
- Dates and quantities must be explicit.
- Units must be stored with quantities where the unit can vary.
- Destructive actions require confirmation and should leave an audit trail where appropriate.
- The interface must work on a phone because daily farm recording may happen away from a desk.
- The design uses restrained typography, borders, tables and whitespace. Avoid decorative gradients and unnecessary visual effects.
