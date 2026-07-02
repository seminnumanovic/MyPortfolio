const email = "semin.contact@gmail.com";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
        <p className="font-mono text-sm text-accent">Contact</p>
        <h2 className="mx-auto mt-2 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
          Have a project in mind? Let&apos;s build it.
        </h2>
        <a
          href={`mailto:${email}`}
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
