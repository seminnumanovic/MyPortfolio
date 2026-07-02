import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const card = (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium">{project.title}</h3>
          {project.project_url && (
            <span className="mt-1 text-muted transition-colors group-hover:text-accent">
              ↗
            </span>
          )}
        </div>
        {project.client_name && (
          <p className="mt-1 text-sm text-muted">{project.client_name}</p>
        )}
        <p className="mt-4 text-sm text-muted">{project.description}</p>
      </div>
      {project.tech_stack.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (project.project_url) {
    return (
      <a
        href={project.project_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    );
  }

  return card;
}
