import { HeadingCardType } from "@/types/conveyer";

/* ─── Heading Card ──────────────────────── */
export default function HeadingCard({ card }: { card: HeadingCardType }) {
  return (
    <div className="lg:pr-8">
      <div className="section-label">
        <span className="label-text">{card.eyebrow}</span>
      </div>
      <h2
        className="font-display tracking-tight text-stone-950 mb-6"
        style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", lineHeight: 1.1 }}
      >
        {card.heading}
      </h2>
      <p className="text-stone-500 text-lg mb-10 font-medium">{card.body}</p>
    </div>
  );
}