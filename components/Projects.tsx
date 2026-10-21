import {
  ArrowUpRight,
  CloudSun,
  ScanSearch,
  ShoppingBag,
  StickyNote,
  Store,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = {
  "Shoes Store": ShoppingBag,
  SitePulse: ScanSearch,
  "Weather App": CloudSun,
  "Flow Notes": StickyNote,
  "Meridian Market": Store,
};

export function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="kicker">Selected work</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">Projects</h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[project.name] ?? ArrowUpRight;
            return (
              <li key={project.name} className={i === 0 ? "md:col-span-2" : ""}>
                <Reveal delay={i * 70} className="h-full">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-white/[0.06] sm:p-7"
                  >
                    <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-red-500/10 blur-2xl transition group-hover:bg-red-500/20" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/15 text-red-300 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-ivory-dim transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory" />
                    </div>
                    <h3 className="display mt-6 text-2xl sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-xl flex-1 text-sm leading-relaxed text-ivory-muted">
                      {project.description}
                    </p>
                    <p className="mt-4 text-xs tracking-wide text-ivory-dim">
                      {project.tags.join("  ·  ")}
                    </p>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
