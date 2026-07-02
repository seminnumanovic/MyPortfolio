import { login } from "@/app/admin/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center px-6">
      <form
        action={login}
        className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8"
      >
        <h1 className="text-xl font-medium">Admin login</h1>
        <p className="mt-1 text-sm text-muted">
          Sign in to manage your projects.
        </p>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Password
            <input
              type="password"
              name="password"
              required
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
