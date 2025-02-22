import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Link from "next/link";
import Theme from "@/components/shared/Navbar/Theme";

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        {/*<button variant="outline">Open</button>*/}
        <Button variant="ghost">
          <IconHamburgerMenu
            width={24}
            height={24}
            className="dark:text-white cursor-pointer"
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] dark:bg-gray-900 dark:text-white dark:border-none bg-white px-2"
      >
        <SheetHeader className="px-4 py-2">
          {/*<SheetDescription></SheetDescription>*/}
          <div className="flex flex-row justify-start items-center gap-4">
            <SheetTitle className="mt-4">
              <div className="flex items-center gap-2">
                <Logo />
                <Link
                  href={"/"}
                  className="dark:text-white flex items-center gap-2"
                >
                  <h3 className="text-xl font-semibold font leading-9">
                    Sparky
                  </h3>
                </Link>
                <Theme />
              </div>
            </SheetTitle>
          </div>
        </SheetHeader>

        <hr className="my-4 mx-4" />
        <div className="flex flex-col">
          {navLinks.map((navLink) => (
            <SheetClose asChild key={navLink.label}>
              <Link
                href={navLink.href}
                className="py-4 hover:bg-brand-700/10 rounded-lg px-4"
              >
                {navLink.label}
              </Link>
            </SheetClose>
          ))}
        </div>
        <SheetFooter className="absolute bottom-0">
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

// icon:hamburger-menu | Radix Icons https://icons.radix-ui.com/ | WorkOS
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

function IconHamburgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
