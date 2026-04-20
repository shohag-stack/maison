import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/siteConfig";
import { Bricolage_Grotesque, Inter, Bowlby_One } from "next/font/google";


const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const bolbo = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bolbo",
});


export const metadata: Metadata = {
  title:       { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph:   { type: "website", url: site.url, title: site.name, description: site.description },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${bolbo.variable}`} >
      <body className="overflow-x-hidden">
        <Navbar name={site.name} />
        <main>{children}</main>
        <Footer name={site.name} />
      </body>
    </html>
  );
}
