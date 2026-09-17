import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";
import { QuickAction } from "@/components/quick-action";

export default function DashboardPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Today at Mama Suubi's Farm"
        description="The dashboard should answer what is happening in the flock, what was produced, what was spent, and what needs attention."
      />

      <EmptyState
        title="Start with your first flock"
        description="Add the farm details and first flock. Once daily records are entered, this dashboard will show birds alive, eggs collected, feed used, mortality, sales, costs, and alerts."
      />

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-semibold">Daily records</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">The records you are most likely to enter every day.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <QuickAction label="Record eggs" href="/production" />
          <QuickAction label="Record mortality" href="/flocks" />
          <QuickAction label="Record feed" href="/feed" />
          <QuickAction label="Record health" href="/health" />
          <QuickAction label="Record sale" href="/sales" />
        </div>
      </section>
    </div>
  );
}
