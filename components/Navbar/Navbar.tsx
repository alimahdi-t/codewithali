"use client";

import Theme from "@/components/Navbar/Theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/Navbar/MobileNav";
import { navLinks, profileDropDownLinks } from "@/constants";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Logo } from "@/constants/Icons";

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <div className="flex gap-8 max-md:hidden text-black dark:text-white">
      {navLinks.map((navLink) => (
        <Link
          className={`blur-0 mx-4 ${
            pathName === navLink.href &&
            "dark:text-blue-500 text-blue-700 font-bold"
          }`}
          key={navLink.label}
          href={navLink.href}
        >
          {navLink.label}
        </Link>
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="flex justify-center sticky top-0 z-50">
      <nav className="py-6 w-full background-dark900_light50 border-b dark:border-gray-800 flex justify-center ">
        <div className="max-w-7xl w-full lg:px-12 px-6 flex justify-between items-center">
          <AuthUI className="md:hidden" />
          <Link href="/" className="dark:text-white flex items-center gap-2 ">
            <h3 className="text-xl font-bold font">
              <Logo className="w-12 h-12" />
            </h3>
          </Link>
          <NavLinks />
          <div className="flex gap-4 items-center">
            <Theme className="max-md:hidden" />
            <MobileNav className="md:hidden" />
            <AuthUI className="max-md:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

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
        <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign-in
        </Button>
      )}
    </div>
  );
};
