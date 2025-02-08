"use client";

import React from "react";

import SidebarMenu from "@/app/SidebarMenu";

const Sidebar = ({ width }: { width: string }) => {
  return (
    <aside className="h-screen sticky top-0 w-[256px]">
      <div className={`bg-white hidden md:block border-l`}>
        <SidebarMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
