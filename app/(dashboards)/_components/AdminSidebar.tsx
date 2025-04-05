"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/auth/logout-button";
import { HiOutlineBars3, HiPower } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { UserProfileCard } from "@/components/auth/user-profile-card";
import { adminDashboardLinks } from "@/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const AdminSidebar = () => {
  return (
    <aside
      className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col border-l c-border bg-card shadow-sm`}
    >
      <div
        className={`"w-full flex grow flex-col overflow-y-auto scroll-thin px-2 pb-4 py-4`}
      >
        <SidebarMenu />
      </div>
    </aside>
  );
};

export const SidebarMenu = () => {
  return (
    <div className="">
      <UserProfileCard />
      <Separator className="my-4" />
      <ul role="list" className="flex flex-col gap-0.5">
        {adminDashboardLinks.map((item, i) => (
          <MenuItem item={item} key={i} />
        ))}
        <Separator className="" />
        <LogoutButton>
          <li className="text-gray-800 hover:bg-gray-100 hover:text-brand-600 group flex gap-x-3 rounded-md p-2 text-sm font-normal leading-6 gap-2 items-center w-full px-2 py-3">
            <HiPower className={`w-5 h-5`} />
            خروج از حساب
          </li>
        </LogoutButton>
      </ul>
    </div>
  );
};

const MenuItem = ({ item, ...props }: { item: any }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} {...props}>
      <li
        className={`group flex gap-x-3 rounded-md text-sm font-normal leading-6 gap-2 items-center w-full px-2 py-3
            ${
              pathname === item.path
                ? "bg-gray-100 text-brand-600"
                : "text-gray-800 hover:bg-gray-100 hover:text-brand-600"
            }`}
      >
        <item.icon className={`w-5 h-5`} />
        {item.label}
      </li>
    </Link>
  );
};

export const AdminMobileSideBar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="rounded-full" size="icon">
          <HiOutlineBars3 className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 overflow-y-auto bg-white scroll-thin "
      >
        <SheetHeader>
          <SheetTitle>
            <UserProfileCard />
          </SheetTitle>
        </SheetHeader>
        <div className="bg-white px-2">
          <Separator />
          <ul role="list" className="flex mt-1 flex-col gap-0.5">
            {adminDashboardLinks.map((item, i) => (
              <SheetClose asChild key={i}>
                <Link href={item.path}>
                  <li
                    className={`group flex gap-x-3 rounded-md text-sm font-normal leading-6 gap-2 items-center w-full px-2 py-3
            ${
              pathname === item.path
                ? "bg-gray-100 text-brand-600"
                : "text-gray-800 hover:bg-gray-100 hover:text-brand-600"
            }`}
                  >
                    <item.icon className={`w-5 h-5`} />
                    {item.label}
                  </li>
                </Link>
              </SheetClose>
            ))}
            <Separator className="" />
            <SheetClose asChild>
              <LogoutButton>
                <li className="text-gray-800 hover:bg-gray-100 hover:text-brand-600 group flex gap-x-3 rounded-md p-2 text-sm font-normal leading-6 gap-2 items-center w-full px-2 py-3">
                  <HiPower className={`w-5 h-5`} />
                  خروج از حساب
                </li>
              </LogoutButton>
            </SheetClose>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};