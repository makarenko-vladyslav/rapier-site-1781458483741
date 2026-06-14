import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Кришталь Клінінг — Преміальне прибирання в Києві",
  description: "Професійна служба прибирання для приватних осель та офісів. Німецьке обладнання, екологічні засоби. Прибуття за 60 хвилин.",
  keywords: ["клінінг київ", "прибирання квартир", "преміум клінінг", "еко прибирання", "Кришталь Клінінг"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-text-main bg-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
