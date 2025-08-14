import { getUserPurchasedCoursesAction } from "@/actions/courses/get-user-purchased-courses.action";
import { toPersianNumber } from "@/utils";
import { SectionBlock } from "@/components/dashboard/SectionBlock";
import { DashboardPurchasedCourseCard } from "@/components/dashboard/DashboardPurchasedCourseCard";

export default async function UserCoursesPage() {
  const courses = await getUserPurchasedCoursesAction();

  if (!courses || !courses.length) {
    return null;
  }
  return (
    <>
      <SectionBlock title={`دوره های من (${toPersianNumber(courses?.length)})`}>
        <div className="grid grid-cols-4 gap-4">
          {courses?.map((course) => (
            <DashboardPurchasedCourseCard
              key={course.id}
              id={course.id}
              slug={course.slug}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              instructor={course.instructor}
            />
          ))}
        </div>
      </SectionBlock>
    </>
  );
}