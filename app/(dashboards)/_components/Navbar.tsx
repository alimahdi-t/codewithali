import ThemeButton from "@/components/common/ThemeButton";
import ShowDate from "@/components/common/ShowDate";
import { Logo } from "@/components/Logo";
import React from "react";
import { AdminMobileSideBar } from "@/app/(dashboards)/_components/AdminSidebar";
import { CartButton } from "@/components/shared/cart/CartButton";

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 z-40 ">
      <nav className="flex h-16 items-center justify-between bg-card border-b c-border px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 justify-between items-center gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex items-center gap-2">
            <Logo iconClassName="w-16 h-16" />

            <div
              aria-hidden="true"
              className="hidden lg:block w-px lg:h-6 lg:w-px bg-gray-200 dark:bg-gray-800"
            />
            <ShowDate
              format={"امروز ddd D MMM YYYY"}
              className="text-dark-900_light-200 font-normal text-xs text-center max-sm:hidden"
            />
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
            </button>

            <CartButton />
            <ThemeButton />
            <span className="lg:hidden">
              <AdminMobileSideBar />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;