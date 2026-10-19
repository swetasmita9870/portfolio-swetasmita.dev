import { aboutHighlights, projects, site, skills } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  const stats = [
    { value: String(projects.length).padStart(2, "0"), label: "Selected projects" },
    { value: String(skills.length).padStart(2, "0"), label: "Core tools" },
    { value: "IN", label: site.location.split(",")[0] },
  ];

  return (
    <section id="about" className="border-y border-line py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            kicker="01 — About"
            title="Craft over clutter."
            description="Focused on clarity, performance, and interfaces that scale with the product."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-ivory-muted">
              I design and build responsive interfaces that stay calm under real
              product pressure — reusable components, clear hierarchy, and code
              that other engineers can extend. From architecture to deployment, I
              care about how the work feels as much as how it ships.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-line rounded-2xl border border-line bg-ink-raised/50">
              {aboutHighlights.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-5 px-5 py-4 text-sm leading-relaxed text-ivory"
                >
                  <span className="font-medium tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={160 + i * 60}>
              <div className="surface-card p-6">
                <dt className="display text-4xl text-ivory sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory-dim">
                  {stat.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
