import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Price from "@/components/common/Price";
import { getCourses } from "@/actions/courses/get-courses.action";
import { convertToPersianNumbers } from "@/utils";
import CourseLevel from "@/components/CourseLevel";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CourseActions } from "@/app/(dashboards)/dashboard/admin/courses/_components/CourseAction";

const CoursesListPage = async () => {
  const courses = await getCourses({});

  return (
    <div className="w-full">
      {/* ✅ Page Header */}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-gray-900">
            مدیریت دوره‌ها
          </h1>
          <p className="mt-2 text-base text-gray-900">
            لیست تمام دوره‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد
            صحفه آن دوره شوید.
          </p>
        </div>
        <Link href="/dashboard/admin/courses/new"></Link>
      </div>

      {/* ✅ Courses Table */}
      <div className="mt-8 flex flex-col gap-y-4">
        <div className="flex gap-x-4">
          <Select dir="rtl">
            <SelectTrigger className="w-[180px] bg-white shadow cursor-pointer">
              <SelectValue placeholder="سطح دوره" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select dir="rtl">
            <SelectTrigger className="w-[180px] bg-white shadow cursor-pointer">
              <SelectValue placeholder="وضعیت دوره" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Input />
        </div>
        <div className="flow-root px-4 py-4 bg-white shadow  rounded-lg">
          <div className="inline-block min-w-full py-2 align-middle">
            <Table>
              <TableHeader className="align-middle">
                <TableRow className="font-semibold select-none text-sm text-gray-900">
                  <TableHead className="w-24 text-start">ردیف</TableHead>
                  <TableHead className="text-start">عنوان</TableHead>
                  <TableHead className="text-start">مدرس</TableHead>
                  <TableHead className="text-start">قیمت</TableHead>
                  <TableHead className="max-md:hidden text-start">
                    سطح دوره
                  </TableHead>
                  <TableHead className="max-md:hidden text-start">
                    وضعیت دوره
                  </TableHead>
                  <TableHead className="text-start">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text[#5A6A85]">
                {courses.map((course, index) => (
                  <TableRow
                    key={course.id}
                    className="h-[72px] text[#5A6A85] text-sm"
                  >
                    <TableCell className="text-xs font-normal">
                      {convertToPersianNumbers(index + 1)}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:text-brand-700"
                      >
                        {course.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href="#" className="hover:text-brand-700">
                        {`${course.instructor.firstName} ${course.instructor.lastName}`}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Price
                        price={course.price}
                        classname="text-xs font-semibold"
                      />
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      <CourseLevel value={course.level} />
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      {course.status}
                    </TableCell>
                    <TableCell className="text-gray-600 cursor-pointer">
                      <CourseActions courseSlug={course.slug} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {/*  </CardContent>*/}
      {/*</Card>*/}
    </div>
  );
};

export default CoursesListPage;