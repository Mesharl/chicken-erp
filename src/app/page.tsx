import { QuickAction } from "@/components/quick-action";
import { PageHeader } from "@/components/page-header";

const priorities = [
  ["Set up your farm", "Add the farm details and poultry houses you use.", "/farms"],
  ["Create your first flock", "Record the birds you currently have and when they arrived.", "/flocks"],
  ["Start today's records", "Capture eggs, feed, mortality and health events as they happen.", "/production"]
] as const;

export default function DashboardPage() {
  return (
    <div className="p-5 md:p-8">
      <PageHeader
        title="Today"
        description="A practical view of what is happening on Mama Suubi's Farm."
      />

      <section className="border border-[var(--border)] bg-white p-5 md:p-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Farm status</p>
          <h2 className="mt-2 text-xl font-semibold">Your records are ready to begin</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            The dashboard will calculate your live bird count, production, feed position, income and expenses from the records you enter. Nothing is filled in until it comes from your farm.
          </p>
        </div>

        <div className="mt-6 grid gap-px border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
          {priorities.map(([title, description, href]) => (
            <a key={href} href={href} className="bg-white p-4 hover:bg-[var(--background)]">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-sm leading-5 text-[var(--muted)]">{description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--accent)]">Open</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-base font-semibold">Daily records</h2>
        <p className="mb-4 text-sm text-[var(--muted)]">Keep the routine simple. Record the events that change the farm position.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <QuickAction label="Record eggs" href="/production" />
          <QuickAction label="Record mortality" href="/flocks" />
          <QuickAction label="Record feed" href="/feed" />
          <QuickAction label="Record health" href="/health" />
          <QuickAction label="Record sale" href="/sales" />
        </div>
      </section>
    </div>
  );
}
