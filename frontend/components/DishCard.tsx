import Image from "next/image";
import { DishCardType } from "@/types/conveyer";

/* ─── Dish Card ─────────────────────────── */
export default function DishCard({ card }: { card: DishCardType }) {
  return (
    <div
      className="h-full flex flex-col group overflow-hidden"
      style={{ minHeight: 460 }}
    >
      <div className="overflow-hidden aspect-4/5 relative">
        <Image
          src={card.image}
          alt={card.name}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          fill
        />
      </div>
      <div className="py-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-black uppercase tracking-widest">
            {card.name}
          </h3>
          <span className="text-lg font-bold ">{card.price}</span>
        </div>
        <p className="text-base leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}
