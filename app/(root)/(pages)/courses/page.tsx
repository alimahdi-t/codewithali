import CourseCard from "@/components/Course/CourseCard";

import { getAllCourses } from "@/lib/actions/course.action";
import { convertToPersianNumbers } from "@/utils";
import CourseSortOptions from "@/components/Course/CourseSortOptions";
import CourseFilterOption from "@/components/Course/CourseFilterOption";
import BlogCardSideBar from "@/components/Course/Sidebar/SidebarContainer";
import NoResult from "@/components/shared/NoResult";
import { NoCourseFound } from "@/constants/Icons";
import delay from "delay";
import { GetAllCoursesParams } from "@/lib/actions/shared.types";
import Pagination from "@/components/shared/Pagination";

interface Props {
  searchParams: GetAllCoursesParams;
}

const Courses = async ({ searchParams }: Props) => {
  const pageSize: number = 12;
  const courses = await getAllCourses({
    orderBy: searchParams.orderBy,
    isFree: searchParams.isFree,
    isPreOrder: searchParams.isPreOrder,
    levels: searchParams.levels,
    pageSize: pageSize,
    categories: searchParams.categories,
  });
  await delay(2000);
  const number0fCourses = courses.length;

  return (
    <div className="w-full lg:px-12 px-6 flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-brand-500 w-5 h-5 rounded"></div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            دوره‌ها
          </h2>
        </div>

        <p className="mt-2 text-lg leading-8 text-gray-600">{`${convertToPersianNumbers(
          number0fCourses,
        )} عنوان آموزشی`}</p>
      </div>
      <div className="flex gap-4 mt-16">
        <div className="max-lg:hidden">
          <BlogCardSideBar />
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <CourseFilterOption className="sm:hidden" />
            <CourseSortOptions />
          </div>

          <NoResult
            icon={<NoCourseFound />}
            label="دوره‌‌ای با مشخصات مورد نظر پیدا نشد."
            hiddenCondition={courses.length !== 0}
          />

          <div
            className="w-full h-min grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-4 "
          >
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                className="col-span-1"
              />
            ))}
          </div>
          {/* TODO: Pagination*/}
          {courses.length > pageSize && <Pagination />}
        </div>
      </div>
    </div>
  );
};

export default Courses;
