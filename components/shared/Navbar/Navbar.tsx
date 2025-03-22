"use client";

import Theme from "@/components/shared/Navbar/Theme";
import MobileNav from "@/components/shared/Navbar/MobileNav";
import React from "react";

import { Logo } from "@/components/Logo";
import NavLinks from "@/components/shared/Navbar/NavLinks";
import { UserButton } from "@/components/auth/user-button";

const Navbar = () => {
  return (
    <header className="flex justify-center w-full fixed top-0 left-0 z-50">
      <nav className="w-full  backdrop-blur-md border-b c-border flex justify-center dark:bg-gray-900">
        <div className="max-w-7xl w-full lg:px-8 px-2 flex justify-between items-center">
          <MobileNav className="md:hidden" />

          <div className="flex flex-row items-center">
            <Logo iconClassName="w-16 h-16" showText={false} />

            <NavLinks className="max-md:hidden" />
          </div>

          {/*Show on Desktop*/}
          <span className="md:hidden">
            <UserButton />
          </span>

          <div className="flex items-center max-md:hidden ">
            <Theme className="max-md:hidden" />
            <span className="max-md:hidden mx-2">
              <UserButton />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;