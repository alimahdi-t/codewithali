import { getCourses } from "@/actions/courses/get-courses.action";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";
import { COURSE_STATUSES } from "@/constants/dashboard";
import { CoursesTable } from "@/components/tables/CoursesTable";

const CoursesListPage = async () => {
  const result = await getCourses({});
  const { courses, totalCoursesCount, levelCountMap } = result;

  return (
    <div className="w-full">
      {/* ✅ Page Header */}
      <DashboardPageHeader
        title="مدیریت دوره‌ها"
        description="لیست تمام دوره‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد صحفه آن دوره شوید."
      />

      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6 mt-8">
        <StatisticsCard
          count={totalCoursesCount}
          label="همه دوره ها"
          variant="info"
        />
        {COURSE_STATUSES.map((item, index) => (
          <StatisticsCard
            key={index}
            count={levelCountMap[item.value] || 0}
            label={item.label}
            variant={item.variant}
            status={item.value}
          />
        ))}
      </div>

      <div className="mt-6">
        <CoursesTable data={courses ?? []} />
      </div>
    </div>
  );
};

export default CoursesListPage;