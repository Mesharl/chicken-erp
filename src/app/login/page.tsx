import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-5">
      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="text-2xl font-bold tracking-tight">Chicken ERP</div>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Sign in to manage your poultry operations
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@farm.co.ke"
              className="w-full rounded-xl border border-[var(--border)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-[var(--border)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Demo mode uses mock data. Connect Supabase to enable real auth.
        </p>
        <p className="mt-3 text-center text-sm">
          <Link href="/" className="font-medium text-[var(--accent)]">
            Continue to dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
