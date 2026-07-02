export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-20 pb-16 md:pt-32 md:pb-24"
    >
      <p className="font-mono text-sm text-accent">Software Architect</p>
      <h1 className="max-w-3xl text-4xl leading-tight font-medium tracking-tight md:text-6xl">
        I design and build fast, reliable web platforms for growing
        businesses.
      </h1>
      <p className="max-w-xl text-lg text-muted">
        Semin Numanović — I plan the architecture and ship the product,
        from e-commerce storefronts to portfolio sites, using React, Next.js,
        and Supabase.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
