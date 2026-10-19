import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site, socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/SocialIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0 hero-grid opacity-60"
        aria-hidden
      />
      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="animate-slide-up max-w-4xl">
          <p className="kicker">Frontend engineer · {site.location}</p>
          <h1 className="display mt-6 text-[3.1rem] leading-[0.95] sm:text-7xl lg:text-[5.4rem]">
            Interfaces with
            <span className="block text-gradient">quiet precision.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory-muted sm:text-lg">
            I&apos;m {site.name.split(" ")[0]}, a {site.role.toLowerCase()}{" "}
            building fast, considered products with React and Next.js — from
            component systems to shipped interfaces.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Selected work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Schedule a call
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} link={link} />
            ))}
          </div>
        </div>

        <div className="animate-portrait-in relative mx-auto w-full max-w-[340px] lg:mx-0 lg:justify-self-end">
          <div
            className="absolute -inset-4 animate-pulse-ring rounded-[2rem] border border-gold/30"
            aria-hidden
          />
          <div
            className="absolute -inset-3 animate-spin-slow rounded-[2rem] bg-[conic-gradient(from_120deg,transparent_0%,rgba(225,29,46,0.75)_18%,transparent_36%)] opacity-70"
            aria-hidden
          />
          <div className="relative animate-float overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-raised shadow-frame">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.profileImage}
                alt={site.name}
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="340px"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent px-5 pb-5 pt-20">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Available
              </p>
              <p className="mt-1 text-lg font-semibold text-ivory">for new work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
