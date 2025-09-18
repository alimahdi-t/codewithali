// ADMIN TABLE

"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { toPersianNumber } from "@/utils";
import { Tag } from "@/prisma/client";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";

export const TagsTable = ({ data }: { data: Tag[] }) => {
  const columns = [
    {
      key: "id",
      header: "شناسه",
      className: "w-12",
      render: (item: Tag) => toPersianNumber(item.id),
    },

    {
      key: "title",
      header: "عنوان",
      render: (item: Tag) => <TruncatedTooltipText text={item.name} />,
    },

    // {
    //   key: "actions",
    //   header: "عملیات",
    //   render: (item: Tag) => (
    //     <Menubar
    //       dir="rtl"
    //       className="border-none bg-transparent justify-center px-0 py-0"
    //     >
    //       <MenubarMenu>
    //         <MenubarTrigger
    //           asChild
    //           className="bg-transparent p-0 border-none cursor-pointer remove-all"
    //         >
    //           <HiOutlineEllipsisVertical className="w-6 h-6" />
    //         </MenubarTrigger>
    //         <MenubarContent>
    //           <Link href={`/blog/${item.slug}`}>
    //             <MenubarItem>مشاهده</MenubarItem>
    //           </Link>
    //           <Link href={`/dashboard/admin/posts/edit/${item.slug}`}>
    //             <MenubarItem>ویرایش</MenubarItem>
    //           </Link>
    //           <MenubarItem asChild className="text-red-500">
    //             <DeletePostButton postId={item.id} />
    //           </MenubarItem>
    //         </MenubarContent>
    //       </MenubarMenu>
    //     </Menubar>
    //   ),
    // },
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