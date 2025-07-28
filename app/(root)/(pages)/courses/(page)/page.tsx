import CourseCard from "@/components/pages/courses/CourseCard";
import { convertToPersianNumbers, fakeDelay } from "@/utils";
import SortOptions from "@/components/Course/SortOptions";
import { FilterOption } from "@/components/Course/FilterOption";
import BlogCardSideBar from "@/components/Course/Sidebar/SidebarContainer";
import NoResult from "@/components/shared/NoResult";
import { NoCourseFound } from "@/constants/Icons";
import { GetAllCoursesParams } from "@/actions/shared.types";
import { getCourses } from "@/actions/courses/get-courses.action";
import Pagination from "@/components/shared/Pagination";
import { courseSortFilter } from "@/constants/filters";
import { getPurchasedCourseIds } from "@/actions/order/get-purchased-course-ids.action";
import { currentUser } from "@/lib/auth";

interface Props {
  searchParams: Promise<GetAllCoursesParams>;
}

const CoursesPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page || 1;
  const pageSize: number = 12;

  const result = await getCourses({
    isFree: searchParams.isFree,
    searchQuery: searchParams.searchQuery,
    orderBy: searchParams.orderBy,
    levels: searchParams.levels,
    isPreOrder: searchParams.isPreOrder,
    page: searchParams.page,
    categories: searchParams.categories,
    pageSize: pageSize,
  });
  const user = await currentUser();
  const purchasedCourseIds = user
    ? await getPurchasedCourseIds(Number(user.id))
    : [];

  await fakeDelay(3000);
  if (!result) {
    return <p>Loading...</p>;
  }
  const { courses, totalCoursesCount } = result;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-primary w-5 h-5 rounded"></div>
          <h2 className="c-text-h2">دوره‌ها</h2>
        </div>

        <p className="mt-2 text-lg leading-8 text-secondary">{`${convertToPersianNumbers(
          totalCoursesCount,
        )} عنوان آموزشی`}</p>
      </div>

      <div className="flex gap-4 mt-16">
        <div className="w-[300px] max-lg:hidden">
          <BlogCardSideBar />
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="max-sm:hidden lg:hidden">
            <BlogCardSideBar />
          </div>

          <div className="w-full flex gap-4">
            <FilterOption title={"فیلتر"} sheetTitle={"فیلترها"}>
              <BlogCardSideBar />
            </FilterOption>
            <SortOptions basePath="/courses" filters={courseSortFilter} />
          </div>
          <NoResult
            icon={<NoCourseFound />}
            label="دوره‌‌ای با مشخصات مورد نظر پیدا نشد."
            hiddenCondition={courses?.length !== 0}
          />
          <div className="w-full h-min grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses?.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                className="col-span-1"
                purchased={purchasedCourseIds.includes(course.id)}
              />
            ))}
          </div>
          <Pagination itemCount={totalCoursesCount} pageSize={pageSize} />
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;