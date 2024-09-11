"use client";

import Link from "next/link";
import React from "react";
import { dashboardLink } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const Sidebar = ({ width }: { width: string }) => {
  const pathname = usePathname();
  return (
    <aside className="relative">
      <div className={`w-[${width}] fixed h-screen bg-white px-4`}>
        <div className="flex items-center my-8 gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage
              alt="alt"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <p className="text-sm font-semibold">سید علی مهدی</p>
        </div>

        <ul className="w-full  space-y-4">
          {dashboardLink.map((item, i) => (
            <li
              key={i}
              className={`flex gap-2 items-center w-full px-2 py-3 text-gray-800 ${
                pathname === item.href ? "text-blue-500" : ""
              } `}
            >
              <item.icon className="w-6 h-6" />
              <Link href={item.href} className="text-sm font-semibold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
