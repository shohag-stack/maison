import React, { useState } from 'react'
import CheckIcon from '../ui/CheckIcon';
import Field from '../ui/Field';

type Status = "idle" | "submitting" | "success" | "error";


export default function ReservationForm() {

      const [status, setStatus] = useState<Status>("idle");
      const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        date: "", time: "", guests: "2", occasion: "", notes: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // ─── SANITY / API HOOK: POST form data to your booking endpoint
        await new Promise((r) => setTimeout(r, 1400));
        setStatus("success");
      };


  return (
    <div className="lg:col-span-2">
                {status === "success" ? (
                  <div className="flex flex-col items-start gap-6 py-12">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-brand text-stone-950">
                      <CheckIcon />
                    </div>
                    <div>
                      <h2 className="font-display text-4xl font-light tracking-tight text-stone-950 mb-3">
                        Request received
                      </h2>
                      <p className="text-stone-500 text-lg leading-loose max-w-md">
                        Thank you, {form.firstName}. We'll confirm your reservation at {form.email} within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ firstName:"",lastName:"",email:"",phone:"",date:"",time:"",guests:"2",occasion:"",notes:"" }); }}
                      className="btn btn-outline-dark"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="First Name" required>
                        <input name="firstName" value={form.firstName} onChange={handleChange}
                          required placeholder="Antoine" className="form-input" />
                      </Field>
                      <Field label="Last Name" required>
                        <input name="lastName" value={form.lastName} onChange={handleChange}
                          required placeholder="Moreau" className="form-input" />
                      </Field>
                    </div>
    
                    {/* Contact row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Email Address" required>
                        <input name="email" type="email" value={form.email} onChange={handleChange}
                          required placeholder="you@example.com" className="form-input" />
                      </Field>
                      <Field label="Phone Number">
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+1 (212) 555-0100" className="form-input" />
                      </Field>
                    </div>
    
                    {/* Date / Time / Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <Field label="Date" required>
                        <input name="date" type="date" value={form.date} onChange={handleChange}
                          required className="form-input" />
                      </Field>
                      <Field label="Time" required>
                        <select name="time" value={form.time} onChange={handleChange} required className="form-input">
                          <option value="">Select time</option>
                          <optgroup label="Lunch">
                            {["12:00","12:30","13:00","13:30","14:00"].map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Dinner">
                            {["18:30","19:00","19:30","20:00","20:30","21:00","21:30"].map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </optgroup>
                        </select>
                      </Field>
                      <Field label="Guests" required>
                        <select name="guests" value={form.guests} onChange={handleChange} required className="form-input">
                          {[1,2,3,4,5,6,7].map((n) => (
                            <option key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                          ))}
                          <option value="8+">8+ (Contact us)</option>
                        </select>
                      </Field>
                    </div>
    
                    {/* Occasion */}
                    <Field label="Occasion (optional)">
                      <select name="occasion" value={form.occasion} onChange={handleChange} className="form-input">
                        <option value="">Select occasion</option>
                        {["Birthday","Anniversary","Business Dinner","Date Night","Celebration","Other"].map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
    
                    {/* Notes */}
                    <Field label="Special Requests or Dietary Requirements">
                      <textarea
                        name="notes" value={form.notes} onChange={handleChange}
                        rows={4} placeholder="Allergies, seating preferences, accessibility needs…"
                        className="form-input resize-none"
                      />
                    </Field>
    
                    {/* Submit */}
                    <div className="flex items-center gap-6 pt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "submitting" ? "Sending…" : "Request Reservation"}
                      </button>
                      <p className="text-xs text-stone-400 font-body">
                        We confirm within 24 hours.
                      </p>
                    </div>
                  </form>
                )}
              </div>
  )
}
