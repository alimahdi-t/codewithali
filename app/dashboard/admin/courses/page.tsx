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

const CoursesListPage = async () => {
  const courses = await getCourses({});
  // TODO: Add Loading
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            لیست دوره‌ها
          </h1>
          <p className="mt-2 text-xs  text-gray-900">
            لیست تمام دوره‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد
            صحفه آن دوره شوید.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link href={"/dashboard/admin/courses/new"}>
            <Button
              variant="default"
              size="sm"
              className="text-xs hover:bg-brand-700 font-normal"
            >
              افزودن دوره
            </Button>
          </Link>
        </div>
      </div>

      {/*Table*/}
      <div className="mt-8 flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          <Table>
            <TableHeader>
              <TableRow className="font-semibold select-none text-xs">
                <TableCell></TableCell>
                <TableCell>دوره</TableCell>
                <TableCell>مدرس</TableCell>
                <TableCell>قیمت</TableCell>
                <TableCell className="max-md:hidden">سطح دوره</TableCell>
                <TableCell className="max-md:hidden">وضعیت دوره</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="text-xs">
              {courses?.map((course, index) => (
                <TableRow key={course.id}>
                  <TableCell>{convertToPersianNumbers(index)}</TableCell>
                  <TableCell>
                    <Link href={"#"} className="hover:text-brand-700">
                      {course.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={"#"} className="hover:text-brand-700">
                      {course.instructor.firstName +
                        " " +
                        course.instructor.lastName}
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CoursesListPage;
