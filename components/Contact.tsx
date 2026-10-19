"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current || !serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  const emailConfigured = Boolean(serviceId && templateId && publicKey);

  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeader
            kicker="04 — Contact"
            title="Let's build something considered."
            description="Open to freelance work and full-time roles."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="surface-panel mt-10 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-line p-8 sm:p-12 lg:border-b-0 lg:border-r lg:bg-ink-soft/30">
            <ul className="mt-10 space-y-5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 text-ivory"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  <span className="border-b border-transparent group-hover:border-gold">
                    {site.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 text-ivory"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-10 px-5 py-2.5"
            >
              Book on Calendly
            </a>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-ink p-8 sm:p-12"
          >
            <div>
              <label htmlFor="user_name" className="kicker">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                required
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ivory outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="kicker">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ivory outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="kicker">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-sm text-ivory outline-none transition focus:border-gold"
              />
            </div>
            {!emailConfigured && (
              <p className="text-xs text-gold">
                EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* variables
                to enable the form.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending" || !emailConfigured}
              className="btn-primary px-6 py-2.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-center text-sm text-emerald-400">
                Thanks — your message was sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Try email directly.
              </p>
            )}
          </form>
        </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
