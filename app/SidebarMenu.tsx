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
      <div className="flex flex-col items-center my-8 gap-4 bg-brand-400 rounded-lg py-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            alt="alt"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <p className="text-sm font-semibold text-white">سید علی مهدی</p>
      </div>

      <ul role="list" className="-mx-2 flex flex-col gap-0.5">
        {adminDashboardLinks.map((item, i) => (
          <Link href={item.path} key={i}>
            <li
              className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6
            ${
              pathname === item.path
                ? "bg-gray-100 text-brand-600"
                : "text-gray-700 hover:bg-gray-100 hover:text-brand-600"
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
