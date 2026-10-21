import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { site, socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/SocialIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-aurora rounded-full bg-red-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 animate-aurora rounded-full bg-white/5 blur-3xl"
        aria-hidden
        style={{ animationDelay: "-4s" }}
      />
      <div className="section-container relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="animate-slide-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ivory-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-red-400" />
            {site.role}
          </p>
          <h1 className="display mt-6 text-5xl leading-[0.95] sm:text-7xl">
            {site.name.split(" ")[0]}
            <span className="mt-1 block bg-gradient-to-r from-white via-white to-red-300 bg-clip-text text-transparent">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-6 flex items-center gap-2 text-sm text-ivory-muted">
            <MapPin className="h-4 w-4 text-red-400" />
            {site.location}
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ivory-muted">
            I build modern interfaces with React and Next.js — clear systems,
            motion, and products that feel finished.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              View work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-ivory backdrop-blur transition hover:-translate-y-0.5 hover:border-red-400/40"
            >
              <Calendar className="h-4 w-4" />
              Schedule a call
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} link={link} />
            ))}
          </div>
        </div>

        <figure className="animate-portrait-in relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-3 animate-pulse-ring rounded-[2rem] border border-red-400/40"
            aria-hidden
          />
          <div className="relative animate-float overflow-hidden rounded-[1.6rem] border border-white/10 shadow-frame">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.profileImage}
                alt={site.name}
                fill
                priority
                className="object-cover object-[center_15%] transition duration-700 hover:scale-105"
                sizes="380px"
              />
            </div>
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-ivory backdrop-blur-md">
              <span>Available for work</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
