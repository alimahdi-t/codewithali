import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const Yekan = localFont({
  src: [
    {
      path: "../public/fonts/Iranyekan-thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../public/fonts/Iranyekan-light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/Iranyekan-thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../public/fonts/Iranyekan.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Iranyekan-medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Iranyekan-bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/Iranyekan-extrabold.ttf",
      weight: "800",
      style: "extra-bold",
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
      <body className={Yekan.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
