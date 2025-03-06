import React from "react";
import { AdminSidebar } from "@/app/dashboard/AdminSidebar";
import DashboardNavbar from "@/app/dashboard/admin/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarSize = "256px";
  return (
    <>
      <AdminSidebar width={sidebarSize} />
      <div className="lg:pr-64 min-h-full">
        <DashboardNavbar />
        <main className="py-10 min-h-full bg-gray-50">
          <section
            className={`w-full min-h-full  px-4 sm:px-6 lg:px-8 bg-gray-50 `}
          >
            {children}
          </section>
        </main>
      </div>
    </>
  );
}