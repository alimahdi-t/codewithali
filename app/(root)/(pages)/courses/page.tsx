import CourseCard from "@/components/Course/CourseCard";

import { getCourses } from "@/lib/actions/course.action";
import { convertToPersianNumbers } from "@/utils";
import CourseSortOptions from "@/components/Course/CourseSortOptions";
import CourseFilterOption from "@/components/Course/CourseFilterOption";
import BlogCardSideBar from "@/components/Course/Sidebar/SidebarContainer";
import NoResult from "@/components/shared/NoResult";
import { NoCourseFound } from "@/constants/Icons";

const Courses = async () => {
  const courses = [];
  const pageSize: number = 12;

  return (
    <div className="max-w-7xl lg:px-12 px-6 flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-brand-500 w-5 h-5 rounded"></div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            دوره‌ها
          </h2>
        </div>

        <p className="mt-2 text-lg leading-8 text-gray-600">{`${convertToPersianNumbers(
          36,
        )} عنوان آموزشی`}</p>
      </div>
      <div className="flex gap-4 mt-16">
        <div className="max-lg:hidden">
          <BlogCardSideBar />
        </div>

        <div className="flex flex-col gap-4">
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

const Pagination = () => {
  return (
    <div className="w-full flex gap-2 justify-center mt-4">
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
    </div>
  );
};
