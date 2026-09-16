import { PageHeader } from "@/components/page-header";

const reports = [
  {
    title: "Farm performance",
    description: "Birds, production rate, mortality and feed use by farm."
  },
  {
    title: "Flock performance",
    description: "Age, livability, egg rate and weight trends per flock."
  },
  {
    title: "Feed efficiency",
    description: "Feed conversion and cost per dozen or per kg live weight."
  },
  {
    title: "Mortality",
    description: "Daily and rolling mortality with house-level baselines."
  },
  {
    title: "Profitability",
    description: "Revenue, cost allocation and margin by farm and flock."
  },
  {
    title: "Inventory valuation",
    description: "On-hand stock value and reorder exposure."
  }
];

export default function ReportsPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Reports"
        description="Operational and financial analytics for management decisions."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:border-[var(--accent)]"
          >
            <h2 className="font-semibold">{r.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{r.description}</p>
            <button
              type="button"
              className="mt-4 text-sm font-medium text-[var(--accent)]"
            >
              Open report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
