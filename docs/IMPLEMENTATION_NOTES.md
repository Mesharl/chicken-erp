# Implementation notes

This repository is a serious starter architecture with a complete UI shell and database foundation. Modules use realistic mock data until Supabase is connected.

Before deployment:

1. Pin dependency versions and commit the generated lockfile after `npm install`.
2. Validate the Supabase CLI version against current Supabase documentation.
3. Apply the migration in a non-production project first.
4. Run security advisors and review all RLS policies.
5. Wire authentication in middleware and protect routes.
6. Add idempotency keys to mobile write endpoints.
7. Add automated tests for population, stock and finance calculations.
8. Add observability and database backups.
9. Configure a proper CI/CD pipeline.
10. Conduct a Kenya-specific legal and privacy review before collecting personal data or payment information.

UI routes are ready for transactional forms. Prefer Server Actions or API routes with Zod validation. Never bypass the stock movement ledger or the mortality population trigger.
