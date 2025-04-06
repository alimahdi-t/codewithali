"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { HiPower } from "react-icons/hi2";
import { LogoutButton } from "@/components/auth/logout-button";

type MenuItemProps =
  | {
      isLogout: true;
    }
  | {
      isLogout?: false;
      item: {
        path: string;
        label: string;
        icon: React.ElementType;
      };
    };

export const MenuItem = (props: MenuItemProps) => {
  const pathname = usePathname();

  if (props.isLogout) {
    return (
      <LogoutButton>
        <li className="text-foreground hover:bg-gray-100 dark:hover:bg-gray-100/5 hover:text-brand-600 group flex gap-x-3 rounded-md p-2 text-sm font-normal leading-6 gap-2 items-center w-full px-2 py-3">
          <HiPower className="w-5 h-5" />
          خروج از حساب
        </li>
      </LogoutButton>
    );
  }

  const { item } = props;

  return (
    <Link href={item.path}>
      <li
        className={`group flex gap-x-3 rounded-md text-sm font-normal leading-6 gap-2 items-center w-full px-2 py-3
          ${
            pathname === item.path
              ? "bg-gray-100 dark:bg-gray-100/5 text-brand-600"
              : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-100/5 hover:text-brand-600"
          }`}
      >
        <item.icon className="w-5 h-5" />
        {item.label}
      </li>
    </Link>
  );
};