import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/app/(auth)/AuthProvider";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-50 py-24 sm:py-32 flex justify-center">
          {children}
        </section>
        <Footer />
        <ToastContainer />
      </main>
    </>
  );
}
