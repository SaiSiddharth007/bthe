'use client';
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import AmplifyProvider from "@/components/AmplifyProvider"; // ✅ wrapped properly

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>ByteX-HydroHero - Smart Irrigation System</title>
        <meta name="description" content="AI-powered smart irrigation system for precise plant watering" />
        <meta name="generator" content="v0.dev" />
      </head>
      <body className={inter.className}>
        <AmplifyProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </AmplifyProvider>
      </body>
    </html>
  );
}


