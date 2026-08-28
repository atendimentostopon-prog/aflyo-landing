import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { organizationSchema, softwareApplicationSchema } from "@/lib/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Automação de divulgação de ofertas para afiliados`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "automação de afiliado",
    "afiliado automático",
    "afiliado Mercado Livre",
    "afiliado Amazon",
    "afiliado Shopee",
    "afiliado Magalu",
    "automatizar divulgação de ofertas",
    "escalar divulgação de ofertas",
  ],
  openGraph: {
    title: `${SITE.name} — Automação de divulgação de ofertas para afiliados`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Automação de divulgação de ofertas para afiliados`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-0 text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
