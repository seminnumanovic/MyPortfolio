import { createClient } from "@/lib/supabase/server";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";

export default async function WorkSection() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .returns<Project[]>();

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-mono text-sm text-accent">Work</p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
            Selected projects
          </h2>
        </div>
      </div>

      {projects && projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted">
          Projects are coming soon — check back shortly.
        </div>
      )}
    </section>
  );
}
