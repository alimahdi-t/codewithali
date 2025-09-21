// ADMIN TABLE

"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { toPersianNumber } from "@/utils";
import { User } from "@/prisma/client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";
import { StatusBadge } from "@/components/common/StatusBadge";

type UserType = User;

export const UsersTable = ({ data }: { data: UserType[] }) => {
  const columns = [
    {
      key: "id",
      header: "شناسه",
      className: "w-12",
      render: (item: UserType) => toPersianNumber(item.id),
    },

    {
      key: "fullName",
      header: "نام و نام‌خانوادگی",
      render: (item: UserType) => (
        <span>{item.firstName.concat(" ", item.lastName)}</span>
      ),
    },
    {
      key: "username",
      header: "نام کاربری",
      render: (item: UserType) =>
        item.username ? (
          <span>{item.username}</span>
        ) : (
          <StatusBadge variant={"undefined"} text={"تعریف نشده"} />
        ),
    },
    {
      key: "email",
      header: "ایمیل",
      render: (item: UserType) => <span>{item.email}</span>,
    },
    {
      key: "phoneNumber",
      header: "شماره همراه",
      render: (item: UserType) => (
        <span>
          {item.phoneNumber ? (
            toPersianNumber(item.phoneNumber)
          ) : (
            <StatusBadge variant={"undefined"} text={"تعریف نشده"} />
          )}
        </span>
      ),
    },
    {
      key: "role",
      header: "نوع کاربر",
      render: (item: UserType) => {
        switch (item.role) {
          case "ADMIN":
            return <StatusBadge variant={"error"} text={"ادمین"} />;
          case "USER":
            return <StatusBadge variant={"info"} text={"کاربر"} />;
          default:
            return <StatusBadge variant={"warning"} text={"مرجوع شده"} />;
        }
      },
    },
    {
      key: "Actions",
      header: "عملیات",
      render: (item: UserType) => (
        <Menubar
          dir="rtl"
          className="border-none bg-transparent justify-center px-0 py-0"
        >
          <MenubarMenu>
            <MenubarTrigger
              asChild
              className="bg-transparent p-0 border-none cursor-pointer remove-all"
            >
              <HiOutlineEllipsisVertical className="w-6 h-6" />
            </MenubarTrigger>
            <MenubarContent>
              <Link href={`/dashboard/admin/users/edit/${item.id}`}>
                <MenubarItem>ویرایش</MenubarItem>
              </Link>
              <Link href={`/dashboard/admin/users/change-password/${item.id}`}>
                <MenubarItem>تغییر رمز عبور</MenubarItem>
              </Link>
              <MenubarItem asChild className="text-red-500"></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ),
    },
  ];

  return <GenericTable columns={columns} data={data} />;
};