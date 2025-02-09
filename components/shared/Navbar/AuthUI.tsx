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

const AuthUI = ({ className }: { className?: string }) => {
  const { status, data } = useSession();
  return (
    <div className={className}>
      {status === "authenticated" ? (
        <Menubar className={`p-0 m-0 rounded-full border-none ${className}`}>
          <MenubarMenu>
            <MenubarTrigger className="rounded-full p-0 cursor-pointer">
              <Avatar className="w-12 h-12">
                <AvatarImage src={data?.user?.image!} />
                <AvatarFallback>
                  {data?.user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent className="max-md: relative left-5 px-0">
              {profileDropDownLinks.map((value) => (
                <MenubarItem className="cursor-pointer" key={value.label}>
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
