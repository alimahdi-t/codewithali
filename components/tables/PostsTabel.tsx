// ADMIN TABLE

"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { toPersianNumber } from "@/utils";
import { Prisma } from "@/prisma/client";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import DeletePostButton from "@/app/(dashboards)/dashboard/admin/posts/DeletePostButton";

type PostType = Prisma.PostGetPayload<{
  include: {
    author: true;
    tags: true;
  };
}>;

export const PostsTable = ({ data }: { data: PostType[] }) => {
  const columns = [
    {
      key: "id",
      header: "شناسه",
      className: "w-12",
      render: (item: PostType) => toPersianNumber(item.id),
    },

    {
      key: "title",
      header: "عنوان",
      render: (item: PostType) => <TruncatedTooltipText text={item.title} />,
    },
    {
      key: "writer",
      header: "نویسنده",
      render: (item: PostType) => (
        <Link href="#" className="hover:text-brand-700 text-dark-400_light-600">
          {`${item.author.firstName} ${item.author.lastName}`}
        </Link>
      ),
    },
    {
      key: "readingTime",
      header: "زمان مورد نیاز برای خواندن",
      render: (item: PostType) => (
        <span>{`${toPersianNumber(item.readingTime)} دقیقه`}</span>
      ),
    },
    {
      key: "isEditorPick",
      header: "منتخب سردبیر",
      render: (item: PostType) => (
        <span className="text-dark-400_light-600">
          {item.isEditorPick ? "بله" : "خیر"}
        </span>
      ),
    },

    {
      key: "createdAt",
      header: "تاریخ",
      render: (item: PostType) => (
        <span className="text-sm text-dark-400_light-300">
          <DateTooltip date={item.createAt} />
        </span>
      ),
    },
    {
      key: "actions",
      header: "عملیات",
      render: (item: PostType) => (
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
              <Link href={`/blog/${item.slug}`}>
                <MenubarItem>مشاهده</MenubarItem>
              </Link>
              <Link href={`/dashboard/admin/posts/edit/${item.slug}`}>
                <MenubarItem>ویرایش</MenubarItem>
              </Link>
              <MenubarItem asChild className="text-red-500">
                <DeletePostButton postId={item.id} />
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ),
    },
  ];

  return (
    <GenericTable
      columns={columns}
      data={data}
      addButton={{
        href: "/dashboard/admin/posts/new",
        label: "افزودن مقاله",
      }}
    />
  );
};