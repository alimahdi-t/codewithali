import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/actions/getPosts";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertToPersianNumbers } from "@/utils";

const PostsPage = async () => {
  const posts = await getPosts();
  console.log(posts);

  if (!posts || "error" in posts || posts.length === 0) {
    return <p className="text-red-500">هیچ مقاله‌ای یافت نشد.</p>;
  }
  //TODO: Handle if not found, also handle for courses page
  return (
    <div className="w-full">
      {/* ✅ Page Header */}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-gray-900">
            لیست مقاله‌ها
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
                <TableCell>عنوان</TableCell>
                <TableCell>نویسنده</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="text-sm">
              {posts.map((post, index) => (
                <TableRow
                  key={post.id}
                  className="border-gray-200/50 h-12 hover:bg-gray-100"
                >
                  <TableCell>{convertToPersianNumbers(index + 1)}</TableCell>
                  <TableCell>
                    <Link
                      href={`/courses/${post.slug}`}
                      className="hover:text-brand-700"
                    >
                      {post.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="#" className="hover:text-brand-700">
                      {`${post.author.firstName} ${post.author.lastName}`}
                    </Link>
                  </TableCell>

                  <TableCell className="max-md:hidden">
                    {post.isEditorPick}
                  </TableCell>
                  <TableCell className="text-primary cursor-pointer">
                    <Link href={`/dashboard/admin/posts/edit/${post.slug}`}>
                      ویرایش
                    </Link>
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
