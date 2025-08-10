import { DashboardStatBox } from "@/components/dashboard/DashboardStatBox";

import { TooltipWrapper } from "@/components/common/TooltipWrapper";
import { getUserStatsAction } from "@/actions/dashboard/get-user-stats.action";
import { convertToPersianNumbers } from "@/utils";
import { SectionBlock } from "@/components/dashboard/SectionBlock";
import { DashboardPurchasedCourseCard } from "@/components/dashboard/DashboardPurchasedCourseCard";

const Dashboard = async () => {
  const response = await getUserStatsAction();
  if (response.error) {
    return;
  }
  if (!response) {
    return;
  }
  const { count, latest } = response;
  return (
    <div className="w-full space-y-8">
      <section className="lg:dark:darker-gradient-app bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg">
        <DashboardStatBox
          iconSrc="/images/dashboard/courses-empty.png"
          value={`${convertToPersianNumbers(count ?? 0)} دوره`}
          label="دوره ها من"
        />
        <TooltipWrapper label="در دست توسعه">
          <DashboardStatBox
            iconSrc="/images/dashboard/questions-empty.png"
            value={`${convertToPersianNumbers(0)} پرسش`}
            label="پرسش پاسخ"
          />
        </TooltipWrapper>
        <TooltipWrapper label="در دست توسعه">
          <DashboardStatBox
            iconSrc="/images/dashboard/tickets-empty.png"
            value={`${convertToPersianNumbers(0)} تیکت`}
            label="تیکت ها"
          />
        </TooltipWrapper>
        <TooltipWrapper label="در دست توسعه">
          <DashboardStatBox
            iconSrc="/images/dashboard/transactions-empty.png"
            value={
              <>
                {convertToPersianNumbers(0)}{" "}
                <span className="text-label font-regular mr-0.5">تومان</span>
              </>
            }
            label="کیف پول"
          />
        </TooltipWrapper>
      </section>
      <SectionBlock title={"دوره های اخیرا خریداری شده"}>
        <div className="grid grid-cols-4 gap-4">
          {latest?.map((course) => (
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
      <div className="w-full bg-white h-[512px] px-4 rounded-2xl shadow-sm"></div>
    </div>
  );
};

export default Dashboard;