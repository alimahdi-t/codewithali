import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarSize = "256px";
  return (
    <main className="flex">
      <Sidebar width={sidebarSize} />
      <section
        className={`w-full bg-gray-50 py-24 sm:py-32 px-16 mr-[${sidebarSize}]`}
      >
        {children}
      </section>
    </main>
  );
}
