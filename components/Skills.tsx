import {
  Accessibility,
  Code2,
  CreditCard,
  Database,
  GitBranch,
  Globe,
  ScanSearch,
  Smartphone,
  TestTube2,
  Triangle,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const logos: Record<string, string> = {
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  HTML5: "https://cdn.simpleicons.org/html5/E34F26",
  CSS3: "https://cdn.simpleicons.org/css/1572B6",
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Redux: "https://cdn.simpleicons.org/redux/764ABC",
};

const icons: Record<string, LucideIcon> = {
  WCAG: Accessibility,
  "axe-core": ScanSearch,
  Playwright: TestTube2,
  "Responsive design": Smartphone,
  "REST APIs": Globe,
  Strapi: Database,
  Stripe: CreditCard,
  "Git & GitHub": GitBranch,
  Vercel: Triangle,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="kicker">Skills</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">What I work with.</h2>
        </Reveal>
        <div className="mt-12 space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 70}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ivory-dim">
                {group.title}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item) => {
                  const logo = logos[item];
                  const Icon = icons[item] ?? Code2;
                  return (
                    <li
                      key={item}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-white/[0.06]"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 transition group-hover:scale-110">
                        {logo ? (
                          <img
                            src={logo}
                            alt=""
                            width={20}
                            height={20}
                            className="h-5 w-5"
                          />
                        ) : (
                          <Icon className="h-4 w-4 text-red-300" />
                        )}
                      </span>
                      <span className="text-sm text-ivory">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
