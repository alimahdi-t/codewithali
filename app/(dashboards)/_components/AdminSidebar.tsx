"use client";
import React from "react";

import { HiOutlineBars3 } from "react-icons/hi2";
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
import { MenuItem } from "@/app/(dashboards)/_components/AdminSidebar/MenuItem";

export const AdminSidebar = () => {
  return (
    <aside
      className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col border-l c-border bg-card shadow-sm`}
    >
      <div
        className={`"w-full flex grow flex-col overflow-y-auto scroll-thin px-2 pb-4 py-4`}
      >
        <UserProfileCard />
        <Separator className="my-4" />
        <ul role="list" className="flex flex-col gap-0.5">
          {adminDashboardLinks.map((item, i) => (
            <MenuItem item={item} key={i} />
          ))}
          <Separator className="" />

          <MenuItem isLogout={true} />
        </ul>
      </div>
    </aside>
  );
};

export const AdminMobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="rounded-full" size="icon">
          <HiOutlineBars3 className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 overflow-y-auto scroll-thin ">
        <SheetHeader>
          <SheetTitle>
            <UserProfileCard />
          </SheetTitle>
        </SheetHeader>
        <div className="px-2">
          <Separator />
          <ul role="list" className="flex mt-1 flex-col gap-0.5">
            {adminDashboardLinks.map((item, i) => (
              <SheetClose asChild key={i}>
                <MenuItem item={item} />
              </SheetClose>
            ))}
            <Separator className="" />
            <SheetClose asChild>
              <MenuItem isLogout={true} />
            </SheetClose>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};