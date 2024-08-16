import React from "react";
import Navbar from "@/components/Navbar/Navbar";

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
