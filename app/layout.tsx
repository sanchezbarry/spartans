import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeContext";
import { BackToTop } from "@/components/BackToTop";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://spartans-advisor.vercel.app'),
  title: {
    default: 'SPARTANS Advisors — Financial Planning Singapore',
    template: '%s | SPARTANS Advisors',
  },
  description:
    'AIA-affiliated financial advisors based in Tampines, Singapore. Expert guidance on life insurance, CPF, retirement planning, and wealth management. Book a free consultation.',
  keywords: [
    'financial advisor Singapore',
    'AIA financial consultant Singapore',
    'insurance planning Singapore',
    'retirement planning Singapore',
    'CPF planning Singapore',
    'wealth management Singapore',
    'financial planning Tampines',
    'become financial advisor Singapore',
    'join insurance agency Singapore',
  ],
  openGraph: {
    siteName: 'SPARTANS Advisors',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="relative min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
