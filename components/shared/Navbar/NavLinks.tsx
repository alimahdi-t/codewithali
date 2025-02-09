import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const NavLinks = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  return (
    <div className={`flex text-black dark:text-white ${className}`}>
      {navLinks.map((navLink) => (
        <Link
          className={`hover:bg-brand-50 blur-0 px-4 py-2 rounded-lg cursor-pointer text-sm font-semibold
          
          ${
            pathName === navLink.href
              ? "dark:text-blue-500 text-blue-500"
              : "hover:text-brand-900"
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

export default NavLinks;
