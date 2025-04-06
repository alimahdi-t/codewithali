"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useCurrentUser } from "@/hooks/use-current-user";

export const UserProfileCard = () => {
  const user = useCurrentUser();
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg">
      <Avatar className="w-14 h-14">
        <AvatarImage alt="alt" src={user?.image} />
        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold text-center text-gray-900 dark:text-white">
          {user?.name}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-300 font-semibold text-center  rounded-lg px-2 py-1 font-sans">
          {user?.email}
        </p>
      </div>
    </div>
  );
};