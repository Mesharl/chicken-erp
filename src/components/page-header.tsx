export function PageHeader({
  title,
  description,
  action
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Mama Suubi&apos;s Farm</div>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? (
          <p className="mt-1.5 max-w-2xl text-sm text-[var(--muted)]">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
