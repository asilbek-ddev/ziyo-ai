import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ziyo-Ai | Sun'iy Intellect Platformasi",
    template: "%s | Ziyo-Ai",
  },
  description:
    "Ziyo-Ai — sun’iy intellekt asosidagi zamonaviy platforma. AI yordamida tezkor javoblar, kontent yaratish, kod yozish va biznes avtomatlashtirish imkoniyatlarini taqdim etadi. Ziyo-Ai bilan samarali va innovatsion yechimlarga erishing.",
  keywords: [
    "Ziyo AI",
    "Suniy intellekt",
    "AI Uzbekistan",
    "ChatGPT O'zbekcha",
    "AI platforma",
    "O'zbek AI",
    "Suniy intellekt yordamchi",
  ],

  authors: [{ name: "Ziyo-Ai Team", url: "https://ziyo-ai.vercel.app" }],
  creator: "Ziyo-Ai Team",
  publisher: "Ziyo-Ai Team",

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
    canonical: "https://ziyo-ai.vercel.app",
  },

  openGraph: {
    title: "Ziyo-Ai | Sun’iy Intellekt Platformasi",
    description:
      "Ziyo-Ai — O‘zbek tilidagi sun’iy intellekt platformasi. AI yordamida kontent, kod va biznes jarayonlarini avtomatlashtiring.",
    url: "https://ziyo-ai.vercel.app",
    siteName: "Ziyo-Ai",
    images: [
      {
        url: "https://ziyo-ai.vercel.app",
        alt: "Ziyo-Ai Sun’iy Intellekt Platformasi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} font-sans select-none antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            <Script
              id="ziyo-ai-schema"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "Ziyo-Ai",
                  applicationCategory: "ArtificialIntelligenceApplication",
                  operatingSystem: "Web",
                  description:
                    "Ziyo-Ai — O‘zbek tilidagi sun’iy intellekt platformasi.",
                  url: "https://ziyo-ai.vercel.app",
                }),
              }}
            />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
