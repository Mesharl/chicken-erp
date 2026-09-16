# API specification

Base path: `/api`

## Health
`GET /api/health`

## Auth and organization
Handled primarily by Supabase Auth plus membership tables.

## Farms
`GET /api/farms`
`POST /api/farms`
`PATCH /api/farms/:id`

## Flocks
`GET /api/flocks`
`POST /api/flocks`
`POST /api/flocks/:id/mortality`
`POST /api/flocks/:id/weights`

## Production
`GET /api/production/collections`
`POST /api/production/collections`

## Feed
`POST /api/feed/consumption`

## Inventory
`GET /api/inventory/items`
`POST /api/inventory/movements`

## Purchasing
`GET /api/purchasing/orders`
`POST /api/purchasing/orders`
`POST /api/purchasing/orders/:id/receive`

## Sales
`GET /api/sales/orders`
`POST /api/sales/orders`
`POST /api/sales/orders/:id/confirm`
`POST /api/sales/orders/:id/deliver`

## Finance
`GET /api/finance/expenses`
`POST /api/finance/expenses`
`GET /api/finance/payments`
`POST /api/finance/payments`

## Reports
`GET /api/reports/farm-performance`
`GET /api/reports/flock-performance`
`GET /api/reports/feed-efficiency`
`GET /api/reports/mortality`
`GET /api/reports/profitability`

## Response convention

```json
{
  "data": {},
  "error": null,
  "meta": {
    "requestId": "uuid"
  }
}
```

Validation errors should return structured field errors. Never return database internals or secrets.
