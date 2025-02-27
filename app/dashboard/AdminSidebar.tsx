"use client";

import React from "react";

import SidebarMenu from "@/app/SidebarMenu";

const Sidebar = ({ width }: { width: string }) => {
  if (!width) {
    return null;
  }
  return (
    <aside
      className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-l bg-white shadow`}
    >
      <div
        className={`"flex grow flex-col gap-y-5 overflow-y-auto border-r scroll-thin border-gray-200 bg-white px-6 pb-4`}
      >
        <SidebarMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
