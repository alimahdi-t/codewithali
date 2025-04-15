import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="w-full bg-gray-50 dark:bg-gray-950">
        <section className="max-w-7xl lg:px-12 px-6 py-10 mx-auto font-dana">
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
}