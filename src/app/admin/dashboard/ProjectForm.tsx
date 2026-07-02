"use client";

import { useRef, useTransition } from "react";
import type { Project } from "@/types/project";

export default function ProjectForm({
  project,
  action,
  submitLabel,
  onDone,
}: {
  project?: Project;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  onDone?: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      ref={formRef}
      action={(formData) =>
        startTransition(async () => {
          await action(formData);
          formRef.current?.reset();
          onDone?.();
        })
      }
      className="grid gap-4 md:grid-cols-2"
    >
      <label className="flex flex-col gap-1 text-sm">
        Title
        <input
          name="title"
          required
          defaultValue={project?.title}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Client name
        <input
          name="client_name"
          defaultValue={project?.client_name ?? ""}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm md:col-span-2">
        Description
        <textarea
          name="description"
          rows={3}
          defaultValue={project?.description}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm md:col-span-2">
        Tech stack (comma-separated)
        <input
          name="tech_stack"
          defaultValue={project?.tech_stack.join(", ")}
          placeholder="Next.js, Supabase, Tailwind CSS"
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Project URL
        <input
          name="project_url"
          type="url"
          defaultValue={project?.project_url ?? ""}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Image URL
        <input
          name="image_url"
          type="url"
          defaultValue={project?.image_url ?? ""}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Sort order
        <input
          name="sort_order"
          type="number"
          defaultValue={project?.sort_order ?? 0}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>
      <div className="flex items-end md:col-span-2">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {isPending ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
