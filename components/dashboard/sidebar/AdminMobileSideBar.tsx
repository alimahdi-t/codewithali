"use client";
import { useCurrentRole } from "@/hooks/use-cuurent-role";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiOutlineBars3 } from "react-icons/hi2";
import { UserProfileCard } from "@/components/auth/user-profile-card";
import { Separator } from "@/components/ui/separator";
import { getDashboardLinks } from "@/constants/dashboardsLinks";
import { MenuItem } from "@/components/dashboard/sidebar/MenuItem";
import React from "react";

export const AdminMobileSideBar = () => {
  const role = useCurrentRole();
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
            {getDashboardLinks(role).map((item, i) => (
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