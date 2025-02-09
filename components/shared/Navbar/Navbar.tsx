"use client";

import Theme from "@/components/shared/Navbar/Theme";
import Link from "next/link";
import MobileNav from "@/components/shared/Navbar/MobileNav";
import React from "react";

import { Logo } from "@/components/Logo";
import NavLinks from "@/components/shared/Navbar/NavLinks";
import AuthUI from "@/components/shared/Navbar/AuthUI";

const Navbar = () => {
  return (
    <header className="flex justify-center sticky top-0 z-50">
      <nav className="w-full background-dark900_light50 border-b dark:border-gray-800 flex justify-center ">
        <div className="max-w-7xl w-full lg:px-12 px-6 flex justify-between items-center">
          <MobileNav className="md:hidden" />

          <div className="flex flex-row items-center">
            <Link
              href="/public"
              className="dark:text-white flex items-center gap-2 "
            >
              <h3 className="text-xl font-bold font">
                <Logo className="w-16 h-16" />
              </h3>
            </Link>
            <NavLinks className="max-md:hidden" />
          </div>

          {/*Show on Desktop*/}
          <AuthUI className="md:hidden" />
          <div className="flex items-center max-md:hidden ">
            <Theme className="max-md:hidden" />
            <AuthUI className="max-md:hidden mx-2" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
