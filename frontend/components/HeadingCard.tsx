import { HeadingCardType } from "@/types/conveyer";
import SplitTextReveal from "@/components/lenis/SplitTextReveal"
/* ─── Heading Card ──────────────────────── */
export default function HeadingCard({ card }: { card: HeadingCardType }) {
  return (
    <div className="lg:pr-8">
      <div className="section-label">
        <span className="label-text">{card.eyebrow}</span>
      </div>
      <SplitTextReveal className={'font-display tracking-tight text-4xl md:text-6xl text-stone-950 mb-6 font-bold'}>{card.heading}</SplitTextReveal>
      <SplitTextReveal className="text-stone-500 text-lg mb-10 font-medium">{card.body}</SplitTextReveal>
    </div>
  );
}