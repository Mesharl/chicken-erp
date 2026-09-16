# Security checklist

- RLS enabled on every exposed business table
- Organization membership is the tenant boundary
- Role helper `has_org_role` available for tighter policies
- Authorization is never based on editable user metadata alone
- Service role key is server-only
- Sensitive writes are validated server-side
- Audit logs record privileged actions
- Storage buckets use explicit policies
- File types and sizes are validated
- Rate limiting is added to public and auth endpoints
- Backups and restore testing are configured
- Secrets are managed through deployment environment variables
- Production error messages do not expose SQL or credentials
- Admin accounts should support MFA
