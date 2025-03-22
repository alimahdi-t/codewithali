import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const NavLinks = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  return (
    <div className={`flex text-gray-900 dark:text-gray-200 ${className}`}>
      {navLinks.map((navLink) => (
        <Link
          className={`hover:bg-brand-50/5 blur-0 px-4 py-2 rounded-lg cursor-pointer text-sm
          
          ${
            pathName === navLink.href
              ? "text-primary"
              : "hover:text-brand-900 dark:hover:text-brand-600"
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