"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HiOutlineBookOpen,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiPower,
} from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogoutButton } from "@/components/auth/logout-button";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

export const UserButton = () => {
  const user = useCurrentUser();
  if (!user) {
    return (
      <Link href="/auth/sign-in">
        <Button variant="outline" className="text-sm">
          ورود | ثبت‌نام
        </Button>
      </Link>
    );
  }

  const adminNavs = [
    { label: "داشبورد", path: "/dashboard/admin", icon: HiOutlineSquares2X2 },
    {
      label: "دروه ها",
      path: "/dashboard/admin/courses",
      icon: HiOutlineBookOpen,
    },
    {
      label: "مقالات",
      path: "/dashboard/admin/posts",
      icon: HiOutlineNewspaper,
    },
    {
      label: "کاربران",
      path: "/dashboard/admin/users",
      icon: HiOutlineUserGroup,
    },
    {
      label: "پیام ها",
      path: "/dashboard/admin/messages",
      icon: HiOutlineEnvelope,
    },
    {
      label: "تنظیمات حساب",
      path: "/dashboard/admin/settings",
      icon: HiOutlineCog6Tooth,
    },
  ];

  //TODO: Change the paths
  const userNavs = [
    { label: "پروفایل", path: "/my-account", icon: HiOutlineHome },
    { label: "دوره‌های من", path: "/my-account", icon: HiOutlineBookOpen },
    { label: "جزئیات حساب", path: "/my-account", icon: HiOutlineUser },
  ];

  const navs = user.role === "ADMIN" ? adminNavs : userNavs;

  return (
    <div>
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger>
          <Avatar className="w-10 h-10">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="border">
              {user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>
            <div className="flex items-center gap-2 py-3 cursor-default">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback>
                  {user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="">
                <p className="text-sm font-semibold">{user?.name}</p>
                <p className="text-xs font-sans text-gray-500">{user?.email}</p>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {navs.map((nav, index) => (
              <DropdownMenuItem
                key={index}
                asChild
                className="py-3 text-sm leading-5"
              >
                <Link href={nav.path} className="flex items-center group-item">
                  <nav.icon className="size-5 text-accent-foreground" />
                  {nav.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <LogoutButton>
            <DropdownMenuItem className="py-3 text-sm leading-5">
              <HiPower className="size-5 text-accent-foreground" />
              خروج
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};