import Image from "next/image";
import SplitTextReveal from "@/components/lenis/SplitTextReveal"

export default function PageHeader({
  title,
  src,
  desc,
}: {
  title: string;
  src: string;
  desc?: string;
}) {
  return (
    <div
      className="relative overflow-hidden mt-18"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <div className="absolute inset-0">
        <Image
          src={`${src}`}
          alt="Restaurant"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="site-container relative z-10 py-24 text-center flex flex-col items-start justify-baseline gap-4">
        <h1 className="font-bold font-bolbo text-6xl md:text-[240px] leading-normal tracking-wider text-stone-25">
          <SplitTextReveal>{title}</SplitTextReveal>
        </h1>
        {desc && (
          <p className="text-stone-25 text-left text-lg max-w-md">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
