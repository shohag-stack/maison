import type { Metadata } from "next";
import { legend } from "@/data/legend";
import MenuSections from "@/components/MenuSections";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY } from "@/sanity/lib/QUERY";
import { Menus } from "@/types/menusSection";
import {sections} from "@/data/menus"
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our seasonal menu of contemporary French cuisine.",
};

// ─── SANITY HOOK: fetch menuPage document ───────────────────


const OPTIONS = {next: {revalidate: 30}}


export default async function MenuPage() {

  let data = null

  try {
    if(client) {
      data = await client.fetch<Menus[]>(MENU_QUERY,{}, OPTIONS )
    }
  }
  catch(err){
    console.log("error fetching menu items", err)
  }

  const menus = data ?? sections

  
  return (
    <div className="bg-stone-25 min-h-screen">
      {/* ── Page Hero ──────────────────────────────────────── */}
      <PageHeader title="Menu" src="/img/gallery-header.jpg"/>

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
        {menus.map(({ _id, title, subtitle, items }, idx) => (
          <MenuSections key={_id} title={title} subtitle={subtitle} items={items} _id={String(idx)} />
        ))}
      </div>
      <CtaSection />
    </div>
  );
}
