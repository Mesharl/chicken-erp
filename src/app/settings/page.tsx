import { PageHeader } from "@/components/page-header";

export default function SettingsPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Settings"
        description="Organization profile, users, roles, currency and notification preferences."
      />

      <div className="grid gap-4 max-w-3xl">
        <section className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Organization</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[var(--muted)]">Name</dt>
              <dd className="mt-1 font-medium">Demo Poultry Ltd</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Country</dt>
              <dd className="mt-1 font-medium">Kenya</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Currency</dt>
              <dd className="mt-1 font-medium">KES</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Timezone</dt>
              <dd className="mt-1 font-medium">Africa/Nairobi</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Security</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Row level security is enabled on all business tables. Authorization
            is based on organization membership and role, not client-side checks alone.
          </p>
        </section>

        <section className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Integrations</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Connect Supabase using the variables in .env.example. Service role
            keys must remain server-only.
          </p>
        </section>
      </div>
    </div>
  );
}
