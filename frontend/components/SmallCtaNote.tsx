import Link from "next/link";
import React from "react";

export default function SmallCtaNote() {
  return (
    <div className="p-6 rounded-xl bg-surface-warm">
      <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-3">
        Private Dining
      </p>
      <p className="text-sm text-stone-500 leading-loose">
        For groups of 8 or more, or for private events, please contact us
        directly.
      </p>
      <Link href="/contact" className="btn-ghost text-xs mt-4 inline-flex">
        Enquire →
      </Link>
    </div>
  );
}
