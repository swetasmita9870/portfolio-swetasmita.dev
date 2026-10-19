export const site = {
  name: "Swetasmita Ranjan Sahoo",
  shortName: "Swetasmita",
  role: "Frontend Developer",
  location: "Chandigarh, India",
  email: "swetasmita987@gmail.com",
  phone: "+91 9337127197",
  calendlyUrl: "https://calendly.com/swetasmita987/30min",
  resumeUrl: "/docs/SWETASMITA_RANJAN SAHOO_Resume_21-05-2023-02-02-48.pdf",
  profileImage: "/images/profile.jpg",
  ogImage: "/images/og_image.jpg",
};

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/swetasmita9870",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/swetasmita-ranjan-sahoo-55811a173/",
    icon: "linkedin" as const,
  },
  {
    name: "Email",
    href: "mailto:swetasmita987@gmail.com",
    icon: "mail" as const,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+919337127197",
    icon: "message-circle" as const,
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  "Design and build responsive web interfaces with React and Next.js.",
  "Create reusable components and keep front-end code maintainable.",
  "Collaborate with teams to ship features from idea to production.",
];

export const skills = [
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
  "Responsive design",
  "Web accessibility (WCAG)",
  "axe-core",
  "Playwright",
  "Strapi",
  "Stripe",
  "Git & GitHub",
  "Vercel",
];

export type Project = {
  name: string;
  description: string;
  liveUrl: string;
  repoUrl?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Shoes Store",
    description:
      "E-commerce storefront with Strapi CMS and Stripe checkout, built with Next.js and Tailwind.",
    liveUrl: "https://shoes-store-chi.vercel.app/",
    tags: ["Next.js", "Tailwind", "Strapi", "Stripe"],
  },
  {
    name: "SitePulse",
    description:
      "Paste a public URL and get one audit for accessibility, desktop and mobile speed, and SEO fundamentals.",
    liveUrl: "https://a11y-scan-five.vercel.app/",
    tags: ["Next.js", "axe-core", "Playwright"],
  },
  {
    name: "Weather App",
    description:
      "Weather lookup deployed on Vercel. The live app is behind Vercel deployment protection, so it opens after you sign in.",
    liveUrl: "https://weather-app-swetasmita9870s-projects.vercel.app/",
    tags: ["Vercel"],
  },
];
