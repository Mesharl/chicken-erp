import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function FarmPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Farm"
        description="Set up and manage the farm connected to your account."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Add farm details
          </button>
        }
      />
      <EmptyState
        title="No farm details yet"
        description="Add your farm details to begin recording houses, capacity, flocks and daily operations."
      />
    </div>
  );
}
