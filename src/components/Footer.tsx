const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Semin Numanović</p>
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
          <a
            href="/admin"
            className="transition-colors hover:text-foreground"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
