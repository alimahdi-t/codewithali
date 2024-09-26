import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import AuthProvider from "@/app/(auth)/AuthProvider";
import Footer from "@/components/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import BreadCrump from "@/components/shared/BreadCrump";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/*<BreadCrump />*/}
      <main className="w-full bg-gray-50 dark:bg-gray-950">
        <section className="max-w-7xl py-24 sm:py-32 mx-auto ">
          {children}
        </section>
        {/*<Footer />*/}
        <ToastContainer />
      </main>
    </>
  );
}
