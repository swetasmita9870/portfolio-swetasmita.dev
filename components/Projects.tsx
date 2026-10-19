import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="border-t border-line py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            kicker="03 — Work"
            title="Featured work"
            description="A storefront, a site audit tool, and a weather app."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.name}>
              <Reveal delay={80 + i * 70} className="h-full">
                <article className="surface-card group relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
                <div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <p className="text-[11px] tracking-[0.2em] text-ivory-dim">
                  {String(i + 1).padStart(2, "0")}
                  {i === 0 ? " · Featured" : ""}
                </p>
                <h3 className="display mt-3 text-2xl sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-ink-soft/80 px-2 py-0.5 text-[11px] text-ivory-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ProjectLinks
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectLinks({
  liveUrl,
  repoUrl,
}: {
  liveUrl: string;
  repoUrl?: string;
}) {
  return (
    <div className="mt-6 flex gap-5 border-t border-line pt-5">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ivory transition hover:text-gold-bright"
      >
        Live
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ivory-muted transition hover:text-ivory"
        >
          Code
          <Github className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
