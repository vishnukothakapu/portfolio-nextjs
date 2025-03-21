import type { Metadata } from "next";
import "./globals.css";
import { Poppins,Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import {ThemeProvider} from "@/providers/theme-provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vishnu's Portfolio",
  description: "Hello, I'm Vishnu Kothakapu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
