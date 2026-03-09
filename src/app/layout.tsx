import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import SeoSchema from "@/components/SeoSchema";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sflow.uz"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  title: {
    default: "SFlow — Social Media Automation Platform",
    template: "%s | SFlow",
  },
  description:
    "SFlow is a powerful social media automation platform that helps you schedule posts, manage multiple accounts, analyze performance, and grow your audience across all major social networks.",
  keywords: [
    "social media automation",
    "social media scheduler",
    "instagram automation",
    "facebook automation",
    "tiktok automation",
    "youtube automation",
    "telegram automation",
    "social media management tool",
    "social media analytics",
    "content scheduling platform",
    "marketing automation",
    "SFlow social media tool",
  ],
  authors: [{ name: "SFlow Team" }],
  creator: "SFlow",
  publisher: "SFlow",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SFlow — Social Media Automation Platform",
    description:
      "Automate your social media workflow with SFlow. Schedule posts, manage multiple accounts, analyze performance, and grow faster.",
    url: "https://sflow.uz",
    siteName: "SFlow",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SFlow Social Media Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SFlow — Social Media Automation Platform",
    description:
      "Manage and automate all your social media accounts in one place with SFlow.",
    images: ["/og-image.png"],
    creator: "@sflow",
  },
  alternates: {
    canonical: "https://sflow.uz",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans")} suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <SeoSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
