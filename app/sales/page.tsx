import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/empty-state";

export default function SalesPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Sales"
        description="Manage customers, orders, deliveries and payments for your farm."
        action={
          <button type="button" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white">
            New sale
          </button>
        }
      />
      <EmptyState
        title="No sales yet"
        description="Sales activity will appear here after you record your first order."
      />
    </div>
  );
}
