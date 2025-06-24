'use client';
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/lib/amplify-config"; // ✅ Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByteX-HydroHero - Smart Irrigation System",
  description: "AI-powered smart irrigation system for precise plant watering",
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
