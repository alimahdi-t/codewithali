"use client";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { UserProfileCard } from "@/components/auth/user-profile-card";
import { MenuItem } from "@/components/dashboard/sidebar/MenuItem";
import { getDashboardLinks } from "@/constants/dashboardsLinks";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrentUser } from "@/hooks/use-current-user";

export const AdminSidebar = () => {
  const { user, loading } = useCurrentUser();

  // Show skeleton if user or role not loaded yet
  if (loading) {
    return (
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col border-l c-border bg-card shadow-sm">
        <div className="w-full flex grow flex-col overflow-y-auto scroll-thin px-2 pb-4 py-4">
          {/* Skeleton for user profile card */}
          <div className="flex items-center gap-3">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-24 h-4 rounded-lg" />
              <Skeleton className="w-16 h-4 rounded-lg" />
            </div>
          </div>
          <Separator className="my-4" />

          {/* Skeleton for menu items */}
          <ul className="flex flex-col">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex gap-x-2 items-center px-2 py-3">
                <Skeleton className="w-full h-8 rounded-lg" />
              </div>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
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
          {getDashboardLinks(user?.role).map((item, i) => (
            <MenuItem item={item} key={i} />
          ))}
          <Separator className="" />

          <MenuItem isLogout={true} />
        </ul>
      </div>
    </aside>
  );
};