import Link from "next/link";
import React from "react";

export default function SmallCtaNote() {
  return (
    <div className="p-6 rounded-xl bg-surface-dark ">
      <p className="text-xl tracking-widest2 uppercase font-body text-secondary-light mb-4">
        Private Dining
      </p>
      <p className="text-base text-stone-25 leading-normal">
        For groups of 8 or more, or for private events, please contact us
        directly.
      </p>
      <Link href="/contact" className="btn-ghost text-secondary-light text-xs mt-4 inline-flex">
        Enquire →
      </Link>
    </div>
  );
}
