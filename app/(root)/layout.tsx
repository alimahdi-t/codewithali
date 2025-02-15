import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/*<BreadCrump />*/}

      <main className="w-full bg-gray-50 dark:bg-gray-950">
        <section className="max-w-7xl lg:px-12 py-24 sm:py-40 px-6 mx-auto font-dana">
          {children}
        </section>
        <Footer />
        <ToastContainer />
      </main>
    </>
  );
}
