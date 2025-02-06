import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import AdminSidebar from "@/app/dashboard/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarSize = "256px";
  return (
    <main className="flex">
      <AdminSidebar width={sidebarSize} />
      <section className={`w-full bg-gray-50 py-24 sm:py-32 px-16 mr-[256px]`}>
        {children}
      </section>
    </main>
  );
}
