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
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

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

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <circle cx="100" cy="100" r="100" fill="#007AFF" />
      <path d="M100 10L177.942 145H22.0577L100 10Z" fill="white" />
      <path d="M100 60L134.641 120H65.359L100 60Z" fill="#007AFF" />
      <rect x="121" y="100" width="50" height="20" fill="#007AFF" />
      <rect
        x="83.3507"
        y="31"
        width="50"
        height="20"
        transform="rotate(60.1736 83.3507 31)"
        fill="#007AFF"
      />
      <rect
        x="47"
        y="151.059"
        width="50"
        height="20"
        transform="rotate(-59.4485 47 151.059)"
        fill="#007AFF"
      />
    </svg>
  );
}
