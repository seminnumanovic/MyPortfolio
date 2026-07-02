import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="#top" className="font-mono text-sm tracking-tight">
          SN<span className="text-accent">.</span>
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
