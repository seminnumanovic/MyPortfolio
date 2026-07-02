const groups = [
  {
    title: "Frontend",
    items: ["HTML & CSS", "JavaScript", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "No-code / Low-code",
    items: ["Webflow"],
  },
  {
    title: "Backend & Data",
    items: ["Supabase", "SQL", "System & API design"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-sm text-accent">Services</p>
      <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
        What I work with
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="text-base font-medium">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
