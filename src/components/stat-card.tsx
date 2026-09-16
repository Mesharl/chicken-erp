export function StatCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
      <div className="text-sm text-[var(--muted)]">{label}</div>
      <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
      {detail ? (
        <div className="mt-2 text-xs text-[var(--muted)]">{detail}</div>
      ) : null}
    </div>
  );
}
