# RBAC matrix

| Module | Owner | Admin | Farm Manager | Worker | Accountant | Storekeeper | Sales | Vet |
|---|---|---|---|---|---|---|---|---|
| Organization | Full | Full | Read | None | Read | Read | Read | Read |
| Farms/Houses | Full | Full | CRUD | Read | Read | Read | Read | Read |
| Flocks | Full | Full | CRUD | Operational | Read | Read | Read | CRUD |
| Daily operations | Full | Full | CRUD | Create | Read | Read | Read | Read |
| Health | Full | Full | Read | Record | Read | Read | Read | Full |
| Inventory | Full | Full | Read | Issue | Read | Full | Read | Read |
| Purchasing | Full | Full | Request | None | Approve/Read | Create/Receive | Read | Read |
| Sales | Full | Full | Read | None | Read | Read | Full | None |
| Finance | Full | Full | Read | None | Full | Read | Read | None |
| Reports | Full | Full | Full | Limited | Full | Operational | Sales | Health |
| Users/Roles | Full | Full | None | None | None | None | None | None |
| Audit | Full | Full | Read | None | Read | Read | Read | Read |

Authorization must be enforced server-side and in database RLS. UI hiding is not a security boundary.

Helper functions:
- `is_org_member(org_id)`
- `has_org_role(org_id, allowed roles[])`
