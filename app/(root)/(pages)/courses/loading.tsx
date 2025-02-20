import BlogCardSideBar from "@/components/Course/Sidebar/SidebarContainer";
import CourseFilterOption from "@/components/Course/CourseFilterOption";
import SortOptions from "@/components/Course/SortOptions";
import { Skeleton } from "@/components/ui/skeleton";
import CourseCardLoading from "@/app/(root)/(pages)/courses/CourseCardLoading";

export default function LoadingCoursePage() {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-brand-500 w-5 h-5 rounded"></div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            دوره‌ها
          </h2>
        </div>
        <Skeleton className="w-32 h-7 bg-gray-400 rounded-full" />
      </div>
      <div className="flex gap-4 mt-16">
        <div className="max-lg:hidden">
          <BlogCardSideBar />
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <CourseFilterOption className="sm:hidden" />
            <SortOptions />
          </div>

          <div
            className="w-full h-min grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-4 "
          >
            {courses.map((course, index) => (
              <CourseCardLoading key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
