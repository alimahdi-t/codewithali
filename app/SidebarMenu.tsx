"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { adminDashboardLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div className="flex flex-col items-center my-8 gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            alt="alt"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <p className="text-sm font-semibold">سید علی مهدی</p>
      </div>

      <ul className="w-full space-y-4">
        {adminDashboardLinks.map((item, i) => (
          <Link href={item.path} key={i} className={`text-sm font-semibold`}>
            <li
              className={`flex gap-6 items-center w-full px-6 py-3 text-gray-600 
            hover:bg-blue-300 hover:text-white hover:w-full hover:cursor-pointer 
            ${
              pathname === item.path
                ? "bg-brand-100 border-l-4 border-brand-300"
                : ""
            }`}
            >
              <item.icon className={`w-6 h-6`} />
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
