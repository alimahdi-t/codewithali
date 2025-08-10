import React from "react";
import { AdminSidebar } from "@/components/dashboard/sidebar/AdminSidebar";
import DashboardNavbar from "@/components/dashboard/navbar/Navbar";

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
        <main className="py-10 min-h-full bg-background">
          <section
            className={`w-full min-h-full  px-4 sm:px-6 lg:px-8 bg-background`}
          >
            {children}
          </section>
        </main>
      </div>
    </>
  );
}