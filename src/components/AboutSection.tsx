const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "5", label: "Projects shipped" },
  { value: "5", label: "Happy clients" },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-accent">About</p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
            Architecture-minded, product-focused.
          </h2>
          <p className="mt-6 text-muted">
            I&apos;m a software architect focused on e-commerce and
            portfolio websites for small businesses. I design the system,
            write the code, and make sure the site is fast, maintainable,
            and easy to grow — from first line to launch.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 self-start">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-3xl font-medium text-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
