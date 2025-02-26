import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mikko v2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-6 xl:px-[9rem] 2xl:px-[9rem] grid grid-cols-1 lg:flex gap-[6rem]">
            <div className="flex-grow pt-[4rem]">
              <Navigation />
              {children}
            </div>
            <div className="flex-shrink-0 hidden lg:block border-l-[1px] border-l-neutral-200 dark:border-l-neutral-800">
              <Sidebar />
            </div>
          </main>
          <div className="px-6 xl:px-[9rem] 2xl:px-[9rem] border-t-[1px] border-t-neutral-200 dark:border-t-neutral-800">
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
