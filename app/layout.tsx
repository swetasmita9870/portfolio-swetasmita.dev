import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.shortName} | ${site.role}`,
  description:
    "Portfolio of Swetasmita Ranjan Sahoo — frontend developer building modern web experiences with React and Next.js.",
  openGraph: {
    title: site.name,
    description: `${site.role} based in ${site.location}`,
    images: site.ogImage ? [{ url: site.ogImage }] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
