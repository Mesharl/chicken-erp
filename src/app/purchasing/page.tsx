import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { purchaseOrders } from "@/lib/mock-data";

export default function PurchasingPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Purchasing"
        description="Suppliers, purchase orders and receiving against the stock ledger."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            New purchase order
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">PO</th>
                <th className="px-5 py-3 font-medium">Supplier</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((p) => (
                <tr key={p.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5 font-medium">{p.id}</td>
                  <td className="px-5 py-3.5">{p.supplier}</td>
                  <td className="px-5 py-3.5">{p.date}</td>
                  <td className="px-5 py-3.5">{p.items}</td>
                  <td className="px-5 py-3.5">{p.amount}</td>
                  <td className="px-5 py-3.5">
                    <Badge
                      tone={
                        p.status === "Received"
                          ? "success"
                          : p.status === "Partial"
                            ? "warning"
                            : "accent"
                      }
                    >
                      {p.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
