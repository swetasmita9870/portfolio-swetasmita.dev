"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Calendar, Mail, Phone } from "lucide-react";

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
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <p className="kicker">Contact</p>
          <h2 className="display mt-4 max-w-xl text-4xl sm:text-5xl">
            Let&apos;s work together.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-lg text-ivory transition hover:text-red-200"
            >
              <Mail className="h-4 w-4 text-red-300" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-ivory-muted"
            >
              <Phone className="h-4 w-4 text-red-300" />
              {site.phone}
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-muted">
              Open to freelance and full-time roles. Write directly, or book a
              short call.
            </p>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-ivory transition hover:-translate-y-0.5 hover:border-red-400/40"
            >
              <Calendar className="h-4 w-4" />
              Book on Calendly
            </a>
          </Reveal>

          <Reveal delay={80}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <Field label="Name" id="user_name" name="user_name" />
              <Field
                label="Email"
                id="user_email"
                name="user_email"
                type="email"
              />
              <div>
                <label htmlFor="message" className="kicker">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-ivory outline-none transition focus:border-ivory"
                />
              </div>
              {!emailConfigured && (
                <p className="text-xs text-ivory-dim">
                  Add NEXT_PUBLIC_EMAILJS_* variables to enable the form.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending" || !emailConfigured}
                className="bg-ivory px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-emerald-400">Message sent.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="kicker">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm text-ivory outline-none transition focus:border-ivory"
      />
    </div>
  );
}
