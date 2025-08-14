import Link from "next/link";
import { getPostsAction } from "@/actions/posts/get-posts.action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toPersianNumber } from "@/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import DeletePostButton from "@/app/(dashboards)/dashboard/admin/posts/DeletePostButton";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";

const PostsPage = async () => {
  const result = await getPostsAction({});

  if (!result) {
    return <p className="text-red-500">هیچ مقاله‌ای یافت نشد.</p>;
  }
  const { posts, totalCount } = result;
  //TODO: Handle if not found, also handle for courses page
  return (
    <div className="w-full">
      {/* ✅ Page Header */}
      <DashboardPageHeader
        title="لیست مقاله‌ها"
        description="لیست تمام مقاله‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد صحفه آن مقاله شوید."
        buttonLabel="افزودن مقاله"
        buttonHref="/dashboard/admin/posts/new"
      />

      <div className="mt-8 flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          <Table>
            <TableHeader className="align-middle">
              <TableRow className="text-start">
                <TableHead className="w-24 text-start">ردیف</TableHead>
                <TableHead className="text-start">عنوان</TableHead>
                <TableHead className="text-start">نویسنده</TableHead>
                <TableHead className="text-start">
                  زمان مورد نیاز برای خواندن
                </TableHead>
                <TableHead className="text-start">منتخب سردبیر</TableHead>
                <TableHead className="text-start">تاریخ</TableHead>
                <TableHead className="text-start">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text[#5A6A85]">
              {posts.map((post, index) => (
                <TableRow
                  key={post.id}
                  className="h-[72px] text[#5A6A85] text-sm"
                >
                  <TableCell className="text-xs font-normal">
                    {toPersianNumber(index + 1)}
                  </TableCell>
                  <TableCell>
                    <TruncatedTooltipText text={post.title} />
                  </TableCell>
                  <TableCell className="text-dark-400_light-600">
                    <Link href="#" className="hover:text-brand-700">
                      {`${post.author.firstName} ${post.author.lastName}`}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {`${toPersianNumber(post.readingTime)} دقیقه`}
                  </TableCell>
                  <TableCell className="text-dark-400_light-600">
                    {post.isEditorPick ? "بله" : "خیر"}
                  </TableCell>

                  <TableCell className="text-dark-400_light-300">
                    <DateTooltip date={post.createAt} />
                  </TableCell>
                  <TableCell>
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
                          <Link href={`/posts/${post.slug}`}>
                            <MenubarItem>مشاهده</MenubarItem>
                          </Link>
                          <Link
                            href={`/dashboard/admin/posts/edit/${post.slug}`}
                          >
                            <MenubarItem>ویرایش</MenubarItem>
                          </Link>
                          <MenubarItem asChild className="text-red-500">
                            <DeletePostButton postId={post.id} />
                          </MenubarItem>
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

export default PostsPage;