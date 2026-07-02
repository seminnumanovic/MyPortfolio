"use client";

import { useState, useTransition } from "react";
import type { Project } from "@/types/project";
import { deleteProject, updateProject } from "@/app/admin/actions";
import ProjectForm from "./ProjectForm";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  if (projects.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border p-8 text-center text-muted">
        No projects yet. Add your first one above.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          {editingId === project.id ? (
            <ProjectForm
              project={project}
              submitLabel="Save changes"
              action={updateProject.bind(null, project.id)}
              onDone={() => setEditingId(null)}
            />
          ) : (
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">{project.title}</h3>
                {project.client_name && (
                  <p className="text-sm text-muted">{project.client_name}</p>
                )}
                <p className="mt-2 text-sm text-muted">
                  {project.description}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => setEditingId(project.id)}
                  className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  Edit
                </button>
                <button
                  disabled={isPending}
                  onClick={() =>
                    startTransition(async () => {
                      if (confirm(`Delete "${project.title}"?`)) {
                        await deleteProject(project.id);
                      }
                    })
                  }
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-red-400 transition-colors hover:border-red-400 disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
