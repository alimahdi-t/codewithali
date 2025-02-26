import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Price from "@/components/common/Price";
import { getCourses } from "@/lib/actions/getCourses.action";
import { convertToPersianNumbers } from "@/utils";
import CourseLevel from "@/components/CourseLevel";
import Link from "next/link";

// ✅ Extracted Course Row Component
const CourseRow = ({ course, index }: { course: any; index: number }) => (
  <TableRow className="border-gray-200/50 h-12 hover:bg-gray-100">
    <TableCell>{convertToPersianNumbers(index)}</TableCell>
    <TableCell>
      <Link href={`/courses/${course.slug}`} className="hover:text-brand-700">
        {course.title}
      </Link>
    </TableCell>
    <TableCell>
      <Link href="#" className="hover:text-brand-700">
        {`${course.instructor.firstName} ${course.instructor.lastName}`}
      </Link>
    </TableCell>
    <TableCell>
      <Price price={course.price} classname="text-xs font-semibold" />
    </TableCell>
    <TableCell className="max-md:hidden">
      <CourseLevel value={course.level} />
    </TableCell>
    <TableCell className="max-md:hidden">{course.status}</TableCell>
    <TableCell className="text-primary cursor-pointer">
      <Link href={`/dashboard/admin/courses/edit/${course.slug}`}>ویرایش</Link>
      {/*<Menubar*/}
      {/*  dir="rtl"*/}
      {/*  className="border-none bg-transparent justify-center px-0 py-0"*/}
      {/*>*/}
      {/*  <MenubarMenu>*/}
      {/*    <MenubarTrigger className="bg-transparent p-0 border-none cursor-pointer">*/}
      {/*      <span>...</span>*/}
      {/*    </MenubarTrigger>*/}
      {/*    <MenubarContent>*/}
      {/*      <Link href={`/courses/${course.slug}`}>*/}
      {/*        <MenubarItem>مشاهده</MenubarItem>*/}
      {/*      </Link>*/}
      {/*      <Link href={"#"}>*/}
      {/*        <MenubarItem>ویرایش</MenubarItem>*/}
      {/*      </Link>*/}
      {/*      <Link href={"#"}>*/}
      {/*        <MenubarItem className="text-red-500">حذف</MenubarItem>*/}
      {/*      </Link>*/}
      {/*    </MenubarContent>*/}
      {/*  </MenubarMenu>*/}
      {/*</Menubar>*/}
    </TableCell>
  </TableRow>
);

// ✅ Extracted CoursesTable Component
const CoursesTable = ({ courses }: { courses: any[] }) => (
  <div className="mt-8 flow-root">
    <div className="inline-block min-w-full py-2 align-middle">
      <Table>
        <TableHeader>
          <TableRow className="font-semibold select-none text-base text-gray-900">
            <TableCell></TableCell>
            <TableCell>دوره</TableCell>
            <TableCell>مدرس</TableCell>
            <TableCell>قیمت</TableCell>
            <TableCell className="max-md:hidden">سطح دوره</TableCell>
            <TableCell className="max-md:hidden">وضعیت دوره</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="text-sm">
          {courses.map((course, index) => (
            <CourseRow key={course.id} course={course} index={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

const CoursesListPage = async () => {
  const courses = await getCourses({});

  return (
    <div className="w-full">
      {/* ✅ Page Header */}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-gray-900">
            لیست دوره‌ها
          </h1>
          <p className="mt-2 text-base text-gray-900">
            لیست تمام دوره‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد
            صحفه آن دوره شوید.
          </p>
        </div>
        <Link href="/dashboard/admin/courses/new">
          <Button
            variant="default"
            size="sm"
            className="text-xs hover:bg-brand-700 font-normal"
          >
            افزودن دوره
          </Button>
        </Link>
      </div>

      {/* ✅ Courses Table */}
      <CoursesTable courses={courses} />
    </div>
  );
};

export default CoursesListPage;
