import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function HealthPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Health"
        description="Record vaccinations, treatments, observations and disease incidents."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Add record
          </button>
        }
      />
      <EmptyState
        title="No health records"
        description="Health activity will appear here after you record your first vaccination, treatment or observation."
      />
    </div>
  );
}
