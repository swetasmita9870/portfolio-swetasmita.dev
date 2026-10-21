import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-ivory-dim">
        <p>
          © {year} {site.shortName}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
