"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Field from "@/components/Field";
import CheckIcon from "@/components/ui/CheckIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import MapPinIcon from "@/components/ui/MapPinIcon";
import { client } from "@/sanity/lib/client";
import sendEmail from "@/(core)/lib/sendEmail";
import {contactInfo} from "@/data/contact";

/* ─── Types ───────────────────────────── */
type Status = "idle" | "submitting" | "success";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactData = {
  address: {
    line1: string;
    line2: string;
  };
  phone: string;
  email: string;
  mapEmbed: string;
};

/* ─── Sanity Query ───────────────────── */
const CONTACT_QUERY = `*[_type == "contactPage"][0]{
  address,
  phone,
  email,
  mapEmbed
}`;

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [contact, setContact] = useState<ContactData>(contactInfo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  /* ─── Fetch Sanity Data ─────────────── */
useEffect(() => {
  client?.fetch(CONTACT_QUERY).then((res) => {
    if (res) setContact(res);
  });
}, []);

  /* ─── Submit Handler ───────────────── */
  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");

    const [firstName, ...rest] = data.name.split(" ");
    const lastName = rest.join(" ");

    const res = await sendEmail({
      firstName,
      lastName,
      email: data.email,
      phone: "",
      hearAboutUs: data.subject,
      businessType: "",
      service: "",
      website: "",
      projectDetails: data.message,
      budget: "",
    });

    if (res.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("idle");
    }
  };



  return (

    <div className="bg-stone-25 min-h-screen">
      {/* ── Hero ───────────────── */}
      <PageHeader title="Contact" src="/img/about-header.jpg" />

      {/* ── Content ────────────── */}
      <div className="site-container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* ── LEFT: INFO ─────── */}
          <div className="flex flex-col gap-10">

            {/* Contact details */}
            <div>
              <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">
                Contact Details
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: <MapPinIcon />,
                    label: "Address",
                    value: `${contact.address.line1}, ${contact.address.line2}`,
                    href: "#map",
                  },
                  {
                    icon: <PhoneIcon />,
                    label: "Phone",
                    value: contact.phone,
                    href: `tel:${contact.phone}`,
                  },
                  {
                    icon: <MailIcon />,
                    label: "Email",
                    value: contact.email,
                    href: `mailto:${contact.email}`,
                  },
                ].map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group text-stone-950"
                  >
                    <span className="mt-0.5 text-brand">{icon}</span>
                    <div>
                      <p className="text-2xs tracking-widest uppercase font-body mb-1">
                        {label}
                      </p>
                      <p className="text-sm">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-stone-100" />

            {/* Quick links */}
            <div>
              <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-5">
                Quick Links
              </p>

              <div className="flex flex-col gap-3">
                <Link href="/reservations" className="text-stone-500 hover:text-brand">
                  Make a Reservation
                </Link>
                <Link href="/menu" className="text-stone-500 hover:text-brand">
                  View Our Menu
                </Link>
                <Link href="/about" className="text-stone-500 hover:text-brand">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Map */}
            <div id="map" className="relative h-64 rounded-xl overflow-hidden">
              <iframe
                src={contact.mapEmbed}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── RIGHT: FORM ─────── */}
          <div className="bg-white p-10">
            <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">
              Send a Message
            </p>

            {status === "success" ? (
              <div className="flex flex-col gap-5 py-10">
                <div className="w-12 h-12 bg-brand flex items-center justify-center rounded-full">
                  <CheckIcon />
                </div>
                <h2 className="font-display text-3xl">
                  Message sent!
                </h2>
                <p className="text-stone-500">
                  We’ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-outline-dark self-start"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                <Field label="Your Name" required>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Antoine Moreau"
                    className="form-input"
                  />
                </Field>

                <Field label="Email Address" required>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>

                <Field label="Subject">
                  <select {...register("subject")} className="form-input">
                    <option value="">Select a topic</option>
                    {[
                      "General Enquiry",
                      "Private Dining",
                      "Press & Media",
                      "Careers",
                      "Feedback",
                      "Other",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" required>
                  <textarea
                    {...register("message", { required: true })}
                    rows={6}
                    placeholder="How can we help you?"
                    className="form-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary self-start disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}