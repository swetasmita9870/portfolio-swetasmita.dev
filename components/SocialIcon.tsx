import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import type { socialLinks } from "@/lib/data";

type SocialLink = (typeof socialLinks)[number];

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  "message-circle": MessageCircle,
};

export function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.name}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory-muted transition hover:-translate-y-0.5 hover:border-red-400/40 hover:text-ivory"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
