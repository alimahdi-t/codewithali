"use client";

import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getSession, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export const UserProfileCard = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const refreshSession = async () => {
      await getSession(); // Fetch latest session on mount
    };
    refreshSession();
  }, []);

  const user = session?.user;

  if (!user || status === "loading") {
    return (
      <div className="flex flex-col items-center gap-1 rounded-lg">
        <Skeleton className="size-14 rounded-full" />
        <div className="flex flex-col items-center space-y-1.5 mt-1 w-full">
          <Skeleton className="w-24 h-3.5 rounded-lg" />
          <Skeleton className="w-40 h-3.5 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1 rounded-lg">
      <Avatar className="w-14 h-14">
        <AvatarImage alt="alt" src={user.image ?? ""} />
        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold text-center text-dark-900_light-25">
          {user.name}
        </p>
        <p className="text-xs text-dark-400_light-300 font-semibold text-center rounded-lg px-2 py-1 font-sans">
          {user.email}
        </p>
      </div>
    </div>
  );
};