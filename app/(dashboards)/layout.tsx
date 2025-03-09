import React from "react";
import { AdminSidebar } from "@/app/(dashboards)/_components/AdminSidebar";
import DashboardNavbar from "@/app/(dashboards)/_components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSidebar />
      <div className="lg:pr-64 min-h-full">
        <DashboardNavbar />
        <main className="py-10 min-h-full bg-white">
          <section
            className={`w-full min-h-full  px-4 sm:px-6 lg:px-8 bg-white`}
          >
            {children}
          </section>
        </main>
      </div>
    </>
  );
}