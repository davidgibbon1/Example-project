import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "David Gibbon - Portfolio",
    template: "%s | David Gibbon",
  },
  description: "Portfolio website showcasing projects, writing, and expertise in software development.",
  keywords: ["David Gibbon", "Portfolio", "Software Developer", "Projects", "Writing"],
  authors: [{ name: "David Gibbon" }],
  creator: "David Gibbon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidgibbon.com",
    title: "David Gibbon - Portfolio",
    description: "Portfolio website showcasing projects, writing, and expertise in software development.",
    siteName: "David Gibbon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Gibbon - Portfolio",
    description: "Portfolio website showcasing projects, writing, and expertise in software development.",
    creator: "@davidgibbon1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
