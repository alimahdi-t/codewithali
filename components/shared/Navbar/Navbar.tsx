"use client";

import ThemeButton from "@/components/common/ThemeButton";
import MobileNav from "@/components/shared/Navbar/MobileNav";
import React from "react";

import { Logo } from "@/components/Logo";
import NavLinks from "@/components/shared/Navbar/NavLinks";
import { UserButton } from "@/components/auth/user-button";
import CartCountClient from "@/components/shared/cart/CartButtonWrapper";

const Navbar = () => {
  return (
    <header className="flex justify-center w-full">
      <nav className="w-full border-b c-border border-r flex justify-center dark:bg-gray-900 ">
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
            <CartCountClient />
            <ThemeButton className="max-md:hidden" />
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