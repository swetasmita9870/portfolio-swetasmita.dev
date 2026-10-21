import { Briefcase, Building2, FolderKanban, Rocket, Sparkles, Boxes, Users } from "lucide-react";
import { aboutHighlights, stats } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const highlightIcons = [Sparkles, Boxes, Users];
const statIcons = [Briefcase, Rocket, Building2, FolderKanban];

export function About() {
  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="kicker">About</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            <h2 className="display text-4xl leading-tight sm:text-5xl lg:col-span-5">
              Interfaces that stay quiet under pressure.
            </h2>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[15px] leading-relaxed text-ivory-muted">
                I design and build responsive products with reusable components
                and a clear structure. From first layout to deployment, the goal
                is work other engineers can extend — and users can trust.
              </p>
              <ul className="mt-8 space-y-3">
                {aboutHighlights.map((item, i) => {
                  const Icon = highlightIcons[i] ?? Sparkles;
                  return (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ivory transition hover:-translate-y-0.5 hover:border-red-400/30"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i] ?? Briefcase;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-red-400/30"
              >
                <Icon className="h-5 w-5 text-red-300" />
                <dt className="display mt-4 text-3xl sm:text-4xl">{stat.value}</dt>
                <dd className="mt-2 text-[11px] uppercase tracking-[0.16em] text-ivory-dim">
                  {stat.label}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
