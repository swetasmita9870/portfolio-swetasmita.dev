import { site, socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="section-container flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="display text-2xl">
            {site.shortName}
            <span className="text-gold">.</span>
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory-dim">
            © {year} · {site.role}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
