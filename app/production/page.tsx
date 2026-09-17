import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function ProductionPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Production"
        description="Capture egg collection, grading, wastage and production rates."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Record collection
          </button>
        }
      />
      <EmptyState
        title="No production records"
        description="Production metrics will be calculated from the egg collections you record."
      />
    </div>
  );
}
