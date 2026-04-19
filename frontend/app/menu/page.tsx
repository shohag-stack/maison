import type { Metadata } from "next";
import Link from "next/link";
import { legend } from "@/data/legend";
import MenuSections from "@/components/MenuSections";
import { client } from "@/sanity/client";
import { MENU_QUERY } from "@/sanity/QUERY";
import { Menus } from "@/types/menusSection";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our seasonal menu of contemporary French cuisine.",
};

// ─── SANITY HOOK: fetch menuPage document ───────────────────


const OPTIONS = {next: {revalidate: 30}}


export default async function MenuPage() {

  const menus = await client.fetch<Menus[]>(MENU_QUERY,{}, OPTIONS )

  
  return (
    <div className="bg-stone-25 min-h-screen">
      {/* ── Page Hero ──────────────────────────────────────── */}
      <div className="bg-surface-dark" style={{ paddingTop: "calc(80px + 5rem)", paddingBottom: "5rem" }}>
        <div className="site-container text-center flex flex-col items-center gap-4">
          <p className="label-text">Our Offerings</p>
          <h1 className="font-display font-light tracking-tight text-stone-25"
              style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", lineHeight: 1 }}>
            The Menu
          </h1>
          <p className="text-stone-400 text-lg leading-loose max-w-lg">
            Seasonal ingredients, classical technique, contemporary spirit.<br />
            Menu changes with the seasons.
          </p>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="site-container-narrow py-16 lg:py-24">

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 px-6 py-5 rounded-lg bg-surface-warm mb-16">
          {legend.map(({ code, label }) => (
            <span key={code} className="flex items-center gap-2 text-sm text-stone-500 font-body">
              <span className="inline-flex items-center justify-center w-7 h-5 rounded-sm text-2xs font-medium tracking-wide bg-stone-100 text-stone-500">
                {code}
              </span>
              {label}
            </span>
          ))}
          <span className="text-sm text-stone-400 font-body ml-auto hidden sm:block">
            Allergen information available on request.
          </span>
        </div>

        {/* Sections */}
        {menus.map(({ _id, title, subtitle, items }) => (
          <MenuSections key={_id} title={title} subtitle={subtitle} items={items} _id={_id} />
        ))}

        {/* Wine note */}
        <div className="bg-surface-dark rounded-xl p-10 mb-16">
          <p className="label-text mb-4">Wine Programme</p>
          <p className="text-stone-400 text-lg leading-loose italic">
            Our sommelier has curated an extensive cellar of French and European wines.
            Ask your server for pairing recommendations or request our full wine list.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col items-center gap-6">
          <p className="font-display text-3xl font-light italic text-stone-400">
            Ready to experience the menu?
          </p>
          <Link href="/reservations" className="btn btn-primary">Reserve Your Table</Link>
        </div>
      </div>
    </div>
  );
}
