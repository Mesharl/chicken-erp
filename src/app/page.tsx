import { StatCard } from "@/components/stat-card";
import { QuickAction } from "@/components/quick-action";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { dashboardMetrics, alerts, farms } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Dashboard"
        description="Live view of flocks, production, feed, health and commercial activity."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardMetrics.map((m) => (
          <StatCard key={m.label} label={m.label} value={m.value} detail={m.detail} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Farms overview</h2>
            <Badge tone="accent">3 active</Badge>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--muted)]">
                  <th className="pb-2 font-medium">Farm</th>
                  <th className="pb-2 font-medium">Location</th>
                  <th className="pb-2 font-medium">Birds</th>
                  <th className="pb-2 font-medium">Houses</th>
                  <th className="pb-2 font-medium">Production</th>
                </tr>
              </thead>
              <tbody>
                {farms.map((f) => (
                  <tr key={f.id} className="border-b border-[var(--border)] last:border-0">
                    <td className="py-3 font-medium">{f.name}</td>
                    <td className="py-3 text-[var(--muted)]">{f.location}</td>
                    <td className="py-3">{f.birds.toLocaleString()}</td>
                    <td className="py-3">{f.houses}</td>
                    <td className="py-3">{f.production}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Alerts</h2>
          <div className="mt-4 space-y-3">
            {alerts.map((a) => (
              <div
                key={a}
                className="rounded-xl border border-amber-100 bg-amber-50 p-3 text-sm text-amber-950"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-semibold">Quick operations</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <QuickAction label="Record eggs" href="/production" />
          <QuickAction label="Record mortality" href="/flocks" />
          <QuickAction label="Record feed" href="/feed" />
          <QuickAction label="Vaccination" href="/health" />
          <QuickAction label="New sale" href="/sales" />
        </div>
      </section>
    </div>
  );
}
