import { PageHeader } from "@/components/page-header";
import { feedLogs } from "@/lib/mock-data";

export default function FeedPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Feed"
        description="Record consumption by flock and track feed cost and efficiency."
        action={
          <button
            type="button"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Record feed
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-[var(--muted)]">
              <tr>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Flock</th>
                <th className="px-5 py-3 font-medium">Product</th>
                <th className="px-5 py-3 font-medium">Quantity</th>
                <th className="px-5 py-3 font-medium">Cost</th>
              </tr>
            </thead>
            <tbody>
              {feedLogs.map((r) => (
                <tr key={r.id} className="border-t border-[var(--border)]">
                  <td className="px-5 py-3.5">{r.date}</td>
                  <td className="px-5 py-3.5 font-medium">{r.flock}</td>
                  <td className="px-5 py-3.5">{r.product}</td>
                  <td className="px-5 py-3.5">{r.qty}</td>
                  <td className="px-5 py-3.5">{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
