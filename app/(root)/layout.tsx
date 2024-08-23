import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/app/(auth)/AuthProvider";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <section>{children}</section>
        <Footer />
      </main>
    </>
  );
}
