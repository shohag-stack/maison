import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/siteConfig";

export const metadata: Metadata = {
  title:       { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph:   { type: "website", url: site.url, title: site.name, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar name={site.name} />
        <main>{children}</main>
        <Footer name={site.name} />
      </body>
    </html>
  );
}
