import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function PurchasingPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Purchasing"
        description="Manage suppliers, purchase orders and goods received into the farm."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            New purchase order
          </button>
        }
      />
      <EmptyState
        title="No purchase orders"
        description="Purchase orders will appear here after you create them."
      />
    </div>
  );
}
