import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function FlocksPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Flocks"
        description="Track each flock from placement through production, sale or culling."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Add flock
          </button>
        }
      />
      <EmptyState
        title="No flocks recorded"
        description="Add your first flock to start tracking bird numbers, age, breed, performance and mortality."
      />
    </div>
  );
}
