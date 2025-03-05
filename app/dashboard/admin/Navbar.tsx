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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profileDropDownLinks } from "@/constants";
import Theme from "@/components/shared/Navbar/Theme";
import ShowDate from "@/components/common/ShowDate";
import { Logo } from "@/components/Logo";

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 z-40 ">
      <div className="flex h-16 items-center justify-between bg-white gap-x-4 border-b  px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu01Icon />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto scroll-thin">
              <SidebarMenu />
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
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
        {/* Separator */}
        <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

        <div className="flex flex-1 justify-between items-center gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex items-center gap-2">
            <Logo iconClassName="w-16 h-16" />
            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
            />
            <ShowDate
              format={"امروز ddd D MMM YYYY"}
              className="text-gray-900 font-semibold text-xs"
            />
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              {/*<BellIcon aria-hidden="true" className="h-6 w-6" />*/}
            </button>

            <Theme />
            {/* Separator */}
            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
            />
            <Menubar className={`p-0 m-0 rounded-full border-none`}>
              <MenubarMenu>
                <MenubarTrigger className="rounded-full p-0 cursor-pointer">
                  <p className="px-2">سید علی مهدی</p>
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={
                        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      }
                    />

                    <AvatarFallback>{"ع"}</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent className="max-md: relative left-5 px-0">
                  {profileDropDownLinks.map((value, index) => (
                    <MenubarItem className="cursor-pointer" key={index}>
                      {value.label}
                    </MenubarItem>
                  ))}
                  <MenubarSeparator />
                  <MenubarItem>Logout</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;