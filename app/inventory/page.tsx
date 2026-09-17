import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function InventoryPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Inventory"
        description="Keep a record of feed, medicines, packaging and other farm stock."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            Add item
          </button>
        }
      />
      <EmptyState
        title="Inventory is empty"
        description="Add your first stock item. Quantities will be built from the movements you record."
      />
    </div>
  );
}
