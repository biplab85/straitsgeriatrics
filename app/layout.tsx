import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { seoMetadata, structuredData } from "@/data/content";
import "./globals.scss";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: seoMetadata.ogTitle,
    description: seoMetadata.ogDescription,
    type: "website",
    url: "https://www.straitsgeriatrics.com.sg/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <link rel="canonical" href="https://www.straitsgeriatrics.com.sg/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.clinic) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.physician) }}
        />
      </head>
      <body className="font-body">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
