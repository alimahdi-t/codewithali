import { signIn, signOut, useSession } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profileDropDownLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AuthUI = ({ className }: { className?: string }) => {
  const { status, data } = useSession();
  if (!data) {
    return <Skeleton className="h-12 w-12 rounded-full" />;
  }

  console.log(data.user?.image);
  return (
    <div className={className}>
      {status === "authenticated" ? (
        <Menubar className={`p-0 m-0 rounded-full border-none ${className}`}>
          <MenubarMenu>
            <MenubarTrigger className="rounded-full p-0 cursor-pointer">
              <Avatar className="w-10 h-10">
                <AvatarImage src={data?.user?.image as string} />

                <AvatarFallback>
                  {data?.user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent className="max-md: relative left-5 px-0">
              {profileDropDownLinks.map((value, index) => (
                <MenubarItem className="cursor-pointer" key={index}>
                  {value.label}
                </MenubarItem>
              ))}
              <MenubarSeparator />
              <MenubarItem onClick={() => signOut()}>Logout</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ) : (
        <Button
          variant="ghost"
          className={"text-blue-500 hover:bg-blue-50 hover:text-blue-500"}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          ورود به حساب
        </Button>
      )}
    </div>
  );
};

export default AuthUI;
