import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Zeka Ai | Sun'iy Intellekt Platformasi",
    template: "%s | Zeka Ai",
  },
  description:
    "Zeka Ai — O‘zbek tilidagi eng ilg‘or sun’iy intellekt platformasi. ChatGPT o‘zbekcha, tezkor javoblar, kontent yaratish, kod yozish va biznes jarayonlarini avtomatlashtirish imkoniyatlari. Zeka Ai bilan samaradorlikni oshiring va innovatsiyalarga erishing.",
  keywords: [
    "Zeka Ai",
    "ZekaAI",
    "Suniy intellekt",
    "AI O'zbekiston",
    "ChatGPT o'zbekcha",
    "Suniy intellekt platformasi",
    "AI chat",
    "O'zbek AI",
    "Suniy intellekt yordamchi",
    "Kod yozish AI",
    "Kontent yaratish AI",
    "Business automation AI",
    "Artificial intelligence Uzbekistan",
  ],
  authors: [{ name: "Zeka Ai Team", url: "https://zekai.vercel.app" }],
  creator: "Zeka Ai Team",
  publisher: "Zeka Ai Team",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zekai.vercel.app",
  },
  openGraph: {
    title: "Zeka Ai | Sun’iy Intellekt Platformasi",
    description:
      "Zeka Ai — O‘zbek tilidagi sun’iy intellekt platformasi. AI yordamida kontent, kod va biznes jarayonlarini avtomatlashtiring.",
    url: "https://zekai.vercel.app",
    siteName: "Zeka Ai",
    images: [
      {
        url: "https://zekai.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeka Ai Sun’iy Intellekt Platformasi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeka Ai | Sun’iy Intellekt Platformasi",
    description:
      "O‘zbek tilidagi sun’iy intellekt platformasi — tezkor javoblar, kontent va kod yaratish.",
    images: ["https://zekai.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            <Script
              id="zekai-schema"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "Zeka Ai",
                  applicationCategory: "ArtificialIntelligenceApplication",
                  operatingSystem: "Web Browser",
                  description:
                    "Zeka Ai — O‘zbek tilidagi sun’iy intellekt platformasi. Chat, kontent yaratish va biznes avtomatlashtirish.",
                  url: "https://zekai.vercel.app",
                  author: {
                    "@type": "Organization",
                    name: "Zeka Ai Team",
                  },
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                }),
              }}
            />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
