import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoulMatch Matrimonials",
  description: "Modern matrimonial platform connecting compatible partners with curated matches",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white/80 backdrop-blur border-b border-rose-100 py-4">
          <div className="container flex flex-wrap items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand font-semibold">
                SM
              </span>
              <span className="text-xl font-semibold text-gray-900">
                SoulMatch Matrimonials
              </span>
            </a>
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <a href="#features" className="hover:text-brand">Features</a>
              <a href="#success" className="hover:text-brand">Success Stories</a>
              <a href="#faq" className="hover:text-brand">FAQ</a>
              <a href="/profiles" className="button-primary text-sm">Browse Profiles</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-rose-100 bg-white/70 py-8 text-sm text-gray-600">
          <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} SoulMatch Matrimonials. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-brand">Privacy Policy</a>
              <a href="#" className="hover:text-brand">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-brand">Help Center</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
