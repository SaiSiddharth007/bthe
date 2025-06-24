'use client';
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/lib/amplify-config"; // ✅ Import Amplify config

const inter = Inter({ subsets: ["latin"] });

// ❌ REMOVE export const metadata — it causes build failure in 'use client' context

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>ByteX-HydroHero - Smart Irrigation System</title>
        <meta name="description" content="AI-powered smart irrigation system for precise plant watering" />
        <meta name="generator" content="v0.dev" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

