import React from "react";
import AdminSidebar from "@/app/dashboard/AdminSidebar";
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
import { Button } from "@/components/ui/button";
import { Menu01Icon } from "@/public/assets/icons/hugeIcons";
import SidebarMenu from "@/app/SidebarMenu";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarSize = "256px";
  return (
    <>
      <header className="flex justify-center sticky top-0 z-50 bg-red-400 md:hidden">
        <nav className="w-full flex flex-row justify-between">
          {/*Sidebar hides for mobile and tablets*/}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu01Icon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SidebarMenu />
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div>nav</div>
        </nav>
      </header>
      <main className="flex">
        <AdminSidebar width={sidebarSize} />

        <section className={`w-full bg-white py-24 sm:py-32 flex-grow`}>
          {children}
        </section>
      </main>
    </>
  );
}
