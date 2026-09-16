import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { salesOrders } from "@/lib/mock-data";

export default function SalesPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Sales"
        description="Customers, sales orders, deliveries and payments including M-Pesa."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            New sale
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {salesOrders.map((s) => (
                <tr key={s.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5 font-medium">{s.id}</td>
                  <td className="px-5 py-3.5">{s.customer}</td>
                  <td className="px-5 py-3.5">{s.date}</td>
                  <td className="px-5 py-3.5">{s.items}</td>
                  <td className="px-5 py-3.5">{s.amount}</td>
                  <td className="px-5 py-3.5">
                    <Badge
                      tone={
                        s.status === "Paid" || s.status === "Delivered"
                          ? "success"
                          : s.status === "Overdue"
                            ? "danger"
                            : "accent"
                      }
                    >
                      {s.status}
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
