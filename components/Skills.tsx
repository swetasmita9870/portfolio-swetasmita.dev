import { skills } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            kicker="02 — Skills"
            title="The stack I ship with."
            description="Modern React, typed frontends, and tooling for accessible, production-ready UI."
          />
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line bg-ink-raised/60 px-4 py-2 text-sm text-ivory-muted backdrop-blur-sm transition hover:border-gold/40 hover:text-ivory"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
