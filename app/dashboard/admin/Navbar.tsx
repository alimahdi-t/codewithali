import Theme from "@/components/shared/Navbar/Theme";
import ShowDate from "@/components/common/ShowDate";
import { Logo } from "@/components/Logo";
import React from "react";
import { AdminMobileSideBar } from "@/app/dashboard/AdminSidebar";

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 z-40 ">
      <div className="flex h-16 items-center justify-between bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 justify-between items-center gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex items-center gap-2">
            <Logo iconClassName="w-16 h-16" />

            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
            />
            <ShowDate
              format={"امروز ddd D MMM YYYY"}
              className="text-gray-700 font-normal text-xs text-center max-sm:hidden"
            />
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
            </button>

            <Theme />
            <span className="lg:hidden">
              <AdminMobileSideBar />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;