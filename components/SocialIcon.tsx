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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-ivory-muted backdrop-blur-sm transition hover:border-gold/50 hover:bg-white/[0.06] hover:text-gold-bright"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
