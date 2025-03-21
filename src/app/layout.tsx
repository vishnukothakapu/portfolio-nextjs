import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Poppins,Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import {ThemeProvider} from "@/providers/theme-provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vishnu Kothakapu | Portfolio",
  description: "Showcasing my expertise in full-stack web development, React, Next.js, and modern technologies. Explore my projects, skills, and achievements.",
    icons: {
        icon: "/assets/favicon.png",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        <link rel="icon" href="/assets/favicon.png" sizes="any" />
        <Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id=G-D8VS1JQ5Q2"}/>
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D8VS1JQ5Q2', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
    </head>
      <body
        className={`font-satoshi antialiased  dark:bg-[#13151A]`}
      >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster className="dark:bg-white bg-black"/>
      </ThemeProvider>

      </body>
    </html>
  );
}
