import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertToPersianNumbers } from "@/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { getUsers } from "@/actions/getUsers";

const UsersList = async () => {
  const users = await getUsers({});

  return (
    <div className="w-full">
      {/* ✅ Page Header */}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-gray-900">
            لیست کاربران
          </h1>
          <p className="mt-2 text-base text-gray-900">
            لیست تمام مقاله‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد
            صحفه آن مقاله شوید.
          </p>
        </div>
        <Link href="/dashboard/admin/posts/new">
          <Button
            variant="default"
            size="sm"
            className="text-xs hover:bg-brand-700 font-normal"
          >
            افزودن مقاله
          </Button>
        </Link>
      </div>
      <div className="mt-8 flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          <Table>
            <TableHeader>
              <TableRow className="font-semibold select-none text-base text-gray-900">
                <TableCell></TableCell>
                <TableCell>نام و نام‌خانوادگی</TableCell>
                <TableCell>نام کاربری</TableCell>
                <TableCell>ایمیل</TableCell>
                <TableCell>شماره همراه</TableCell>
                <TableCell>نوع اکانت</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="text-sm">
              {users?.map((user, index) => (
                <TableRow
                  key={user.id}
                  className="border-gray-200/50 h-12 hover:bg-gray-100"
                >
                  <TableCell>{convertToPersianNumbers(index + 1)}</TableCell>
                  <TableCell>
                    <Link
                      href={`/courses/${user.lastName}`}
                      className="hover:text-brand-700"
                    >
                      {user.firstName.concat(" ", user.lastName)}
                    </Link>
                  </TableCell>
                  <TableCell>{user.username ?? "تعریف نشده"}</TableCell>
                  <TableCell>{user.email}</TableCell>

                  <TableCell className="max-md:hidden">
                    {user.phoneNumber ?? "تعریف نشده"}
                  </TableCell>
                  <TableCell className="max-md:hidden">{user.role}</TableCell>
                  <TableCell className="text-gray-600 cursor-pointer">
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
                          {/*<Link href={`/posts/${user.slug}`}>*/}
                          {/*  <MenubarItem>مشاهده</MenubarItem>*/}
                          {/*</Link>*/}
                          <Link href={`/dashboard/admin/users/edit/${user.id}`}>
                            <MenubarItem>ویرایش</MenubarItem>
                          </Link>
                          <MenubarItem
                            asChild
                            className="text-red-500"
                          ></MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;