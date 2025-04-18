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
import { CourseActions } from "@/app/(dashboards)/dashboard/admin/courses/_components/CourseAction";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { Button } from "@/components/ui/button";
import { CourseStatusBadge } from "@/app/(dashboards)/dashboard/admin/courses/_components/CourseStatusBadge";

const CoursesListPage = async () => {
  const courses = await getCourses({});

  return (
    <div className="w-full rounded-xl p-8 bg-card shadow-sm">
      {/* ✅ Page Header */}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-gray-900 dark:text-gray-25">
            مدیریت دوره‌ها
          </h1>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-200">
            لیست تمام دوره‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد
            صحفه آن دوره شوید.
          </p>
        </div>
        <Link href="/dashboard/admin/courses/new">
          <Button variant="default" size="sm" className="text-sm font-normal">
            افزودن مقاله
          </Button>
        </Link>
      </div>

      <div className="mt-12">
        {courses?.length === 0 ? (
          <p className="text-base font-normal">نظری یافت نشد!</p>
        ) : (
          <Table>
            <TableHeader className="align-middle">
              <TableRow className="text-start">
                <TableHead className="w-24 text-start">ردیف</TableHead>
                <TableHead className="text-start">عنوان</TableHead>
                <TableHead className="text-start">مدرس</TableHead>
                <TableHead className="text-start">قیمت</TableHead>
                <TableHead className="text-start">تخفیف فعال</TableHead>
                <TableHead className="text-start">سطح دوره</TableHead>
                <TableHead className="text-start">وضعیت دوره</TableHead>
                <TableHead className="text-start">تاریخ</TableHead>
                <TableHead className="text-start">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text[#5A6A85]">
              {courses?.map((course, index) => (
                <TableRow
                  key={index}
                  className="h-[72px] text[#5A6A85] text-sm"
                >
                  <TableCell className="text-xs font-normal">
                    {convertToPersianNumbers(index + 1)}
                  </TableCell>
                  <TableCell>
                    <TruncatedTooltipText text={course.title} />
                  </TableCell>
                  <TableCell className="text-dark-400_light-600">
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
                  <TableCell className="text-dark-400_light-600">
                    یافت نشد!
                  </TableCell>
                  <TableCell>
                    <CourseLevel value={course.level} />
                  </TableCell>
                  <TableCell>
                    <CourseStatusBadge status={course.status} />
                  </TableCell>
                  <TableCell className="text-dark-400_light-300">
                    <DateTooltip date={course.createdAt} />
                  </TableCell>
                  <TableCell>
                    <CourseActions courseSlug={course.slug} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <div>
          {/*<Pagination*/}
          {/*  pageSize={pageSize}*/}
          {/*  itemCount={filteredCommentCount ?? 0}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
};

export default CoursesListPage;