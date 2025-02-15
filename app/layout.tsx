import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/context/ThemeProvider";
import AuthProvider from "@/app/(auth)/AuthProvider";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const Dana = localFont({
  variable: "--font-dana",
  src: [
    {
      path: "../public/fonts/dana/dana-thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../public/fonts/dana/dana-extraLight.ttf",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "../public/fonts/dana/dana-light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/dana/dana-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/dana/dana-medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/dana/dana-demiBold.ttf",
      weight: "600",
      style: "demi-bold",
    },
    {
      path: "../public/fonts/dana/dana-bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/dana/dana-extraBold.ttf",
      weight: "800",
      style: "extra-bold",
    },
    {
      path: "../public/fonts/dana/dana-black.ttf",
      weight: "900",
      style: "black",
    },
  ],
});

export const metadata: Metadata = {
  title: "Code With Ali",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className={`${Dana.className} scroll-container min-h-screen `}
      >
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
