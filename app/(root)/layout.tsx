import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/app/auth/AuthProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <section>{children}</section>
        <footer className="back">footer</footer>
      </main>
    </>
  );
}
