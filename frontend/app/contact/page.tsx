"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── SANITY HOOK: fetch contactPage document ─────────────────
const contact = {
  address: { line1: "12 Rue de la Paix", line2: "75001 Paris, France" },
  phone:   "+1 (212) 555-0147",
  email:   "hello@maisonelara.com",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937587!2d2.327922!3d48.868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzA0LjgiTiAywrAxOSc0NC40IkU!5e0!3m2!1sen!2sfr!4v1234567890",
};

type Status = "idle" | "submitting" | "success";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // ─── SANITY / API HOOK: send contact form
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <div className="bg-stone-25 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-surface-dark" style={{ paddingTop: "calc(80px + 5rem)", paddingBottom: "5rem" }}>
        <div className="site-container text-center flex flex-col items-center gap-4">
          <p className="label-text">We'd Love to Hear From You</p>
          <h1 className="font-display font-light tracking-tight text-stone-25"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 1 }}>
            Get in Touch
          </h1>
        </div>
      </div>

      {/* ── Info + Form ───────────────────────────────────── */}
      <div className="site-container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left — info */}
          <div className="flex flex-col gap-10">
            {/* Contact details */}
            <div>
              <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">Contact Details</p>
              <div className="flex flex-col gap-6">
                {[
                  { icon: <MapPinIcon />, label: "Address",  value: `${contact.address.line1}, ${contact.address.line2}`, href: "#map" },
                  { icon: <PhoneIcon />,  label: "Phone",    value: contact.phone,  href: `tel:${contact.phone}` },
                  { icon: <MailIcon />,   label: "Email",    value: contact.email,  href: `mailto:${contact.email}` },
                ].map(({ icon, label, value, href }) => (
                  <a key={label} href={href}
                    className="flex items-start gap-4 group text-stone-500 hover:text-stone-950 transition-colors duration-200">
                    <span className="mt-0.5 text-brand shrink-0">{icon}</span>
                    <div>
                      <p className="text-2xs tracking-widest uppercase font-body text-stone-400 mb-1">{label}</p>
                      <p className="text-sm leading-relaxed">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-stone-100" />

            {/* Quick links */}
            <div>
              <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-5">Quick Links</p>
              <div className="flex flex-col gap-3">
                <Link href="/reservations" className="text-sm text-stone-500 hover:text-brand transition-colors flex items-center gap-2">
                  <span className="w-4 h-px bg-brand inline-block" /> Make a Reservation
                </Link>
                <Link href="/menu" className="text-sm text-stone-500 hover:text-brand transition-colors flex items-center gap-2">
                  <span className="w-4 h-px bg-brand inline-block" /> View Our Menu
                </Link>
                <Link href="/about" className="text-sm text-stone-500 hover:text-brand transition-colors flex items-center gap-2">
                  <span className="w-4 h-px bg-brand inline-block" /> Our Story
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div id="map" className="relative h-64 rounded-xl overflow-hidden bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
                alt="Map location" fill style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-stone-25 rounded-lg px-4 py-3 shadow-lg text-center">
                  <p className="text-xs tracking-widest uppercase font-body text-brand mb-1">Our Location</p>
                  <p className="text-sm font-medium text-stone-950">{contact.address.line1}</p>
                  <p className="text-sm text-stone-500">{contact.address.line2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">Send a Message</p>

            {status === "success" ? (
              <div className="flex flex-col gap-5 py-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-brand text-stone-950">
                  <CheckIcon />
                </div>
                <h2 className="font-display text-3xl font-light tracking-tight text-stone-950">Message sent!</h2>
                <p className="text-stone-500 leading-loose">
                  Thank you for reaching out. We'll get back to you within 1–2 business days.
                </p>
                <button onClick={() => { setStatus("idle"); setForm({ name:"",email:"",subject:"",message:"" }); }}
                  className="btn btn-outline-dark self-start">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Your Name" required>
                  <input name="name" value={form.name} onChange={handleChange}
                    required placeholder="Antoine Moreau" className="form-input" />
                </Field>
                <Field label="Email Address" required>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="you@example.com" className="form-input" />
                </Field>
                <Field label="Subject">
                  <select name="subject" value={form.subject} onChange={handleChange} className="form-input">
                    <option value="">Select a topic</option>
                    {["General Enquiry","Private Dining","Press & Media","Careers","Feedback","Other"].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" required>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    required rows={6} placeholder="How can we help you?"
                    className="form-input resize-none" />
                </Field>
                <button type="submit" disabled={status === "submitting"}
                  className="btn btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="form-label">
        {label}{required && <span className="text-brand ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function MapPinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.12 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
function CheckIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
}
