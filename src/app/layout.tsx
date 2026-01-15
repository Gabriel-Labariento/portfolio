import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gabe Labariento",
  description: "My portfolio",
};


import { ThemeProvider } from "@/components/theme-provider"
import { PostHogProvider } from "@/providers/PostHogProvider"
import PostHogPageView from "@/components/PostHogPageView"

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            <div className="min-h-screen flex flex-col font-sans relative overflow-hidden z-0">
              <PostHogPageView />
              <div className="fixed top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] rounded-full bg-blue-100 dark:bg-blue-900/20 blur-[100px] -z-10 opacity-70"></div>
              <div className="fixed bottom-0 left-0 translate-y-12 -translate-x-12 w-[600px] h-[600px] rounded-full bg-blue-50 dark:bg-blue-800/10 blur-[100px] -z-10 opacity-70"></div>
              <Navbar />
              <main className="flex-1 container mx-auto px-4 max-w-5xl">
                {children}
              </main>
              <Footer />
            </div>
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
