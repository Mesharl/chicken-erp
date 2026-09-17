import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function FeedPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Feed"
        description="Record feed issued to each flock and monitor consumption and cost."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Record feed
          </button>
        }
      />
      <EmptyState
        title="No feed records"
        description="Feed consumption will appear here after you record your first issue to a flock."
      />
    </div>
  );
}
