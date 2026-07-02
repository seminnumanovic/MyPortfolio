import { createClient } from "@/lib/supabase/server";
import { createProject, logout } from "@/app/admin/actions";
import type { Project } from "@/types/project";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .returns<Project[]>();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-sm text-accent">Admin</p>
          <h1 className="mt-2 text-2xl font-medium">Projects</h1>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Sign out
          </button>
        </form>
      </div>

      <section className="mt-10 rounded-2xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-base font-medium">Add a project</h2>
        <ProjectForm action={createProject} submitLabel="Add project" />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-base font-medium">All projects</h2>
        <ProjectList projects={projects ?? []} />
      </section>
    </div>
  );
}
