import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";
import { QuickAction } from "@/components/quick-action";

export default function DashboardPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Dashboard"
        description="A clear view of your farm operations. Your records will appear here as you enter them."
      />

      <EmptyState
        title="Your farm is ready to be set up"
        description="There is no operational data yet. Add your farm, flock and first records to start building your dashboard."
      />

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
