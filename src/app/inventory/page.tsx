import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/badge";
import { stockItems } from "@/lib/mock-data";

export default function InventoryPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Inventory"
        description="Item catalogue and stock on hand. Balances change only through movements."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Record movement
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Item</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">On hand</th>
                <th className="px-5 py-3 font-medium">Reorder</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {stockItems.map((s) => {
                const low = s.onHand < s.reorderLevel;
                return (
                  <tr key={s.id} className="border-t border-[var(--border)]">
                    <td className="px-5 py-3.5 font-medium">{s.name}</td>
                    <td className="px-5 py-3.5">{s.category}</td>
                    <td className="px-5 py-3.5">
                      {s.onHand.toLocaleString()} {s.unit}
                    </td>
                    <td className="px-5 py-3.5 text-[var(--muted)]">
                      {s.reorderLevel.toLocaleString()} {s.unit}
                    </td>
                    <td className="px-5 py-3.5">{s.location}</td>
                    <td className="px-5 py-3.5">
                      <Badge tone={low ? "warning" : "success"}>
                        {low ? "Low stock" : "OK"}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
