import { DashboardStatBox } from "@/components/dashboard/DashboardStatBox";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { TooltipWrapper } from "@/components/common/TooltipWrapper";
import { getUserStatsAction } from "@/actions/dashboard/get-user-stats.action";
import { convertToPersianNumbers } from "@/utils";
import { SectionBlock } from "@/components/shared/SectionBlock";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ImageCard } from "@/components/common/card/ImageCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiMiniStar } from "react-icons/hi2";

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
      <DashboardPageHeader
        title="دوره های اخیرا خریداری شده"
        description={""}
      />
      <SectionBlock
        title={"آخرین دورهای ما"}
        link={{ title: "مشاهده همه", href: "/courses" }}
      >
        {latest?.map((course) => (
          <article
            key={course.id}
            className={cn(
              "flex flex-col h-full items-start justify-between c-card",
            )}
          >
            <div className="relative w-full">
              <Link href={`/courses/${course.slug}`}>
                <ImageCard url={course.imageUrl} />
              </Link>
            </div>

            <div className="w-full px-4 py-4 flex flex-col gap-2">
              <div className="group flex flex-col gap-3">
                <h3 className="font-semibold text-lg leading-6">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-base line-clamp-2 h-12 c-card-title"
                  >
                    {course.title}
                  </Link>
                </h3>
                <p className="line-clamp-2 leading-6 c-card-description">
                  {course.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-x-1 cursor-pointer">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={course.instructor?.imageUrl as string} />
                    <AvatarFallback>
                      {course.instructor.firstName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Link
                    href={course.instructor.username ?? "#"}
                    className="font-semibold text-gray-900 ap-text-main hover:text-primary duration-500"
                  >
                    <p className="font-medium text-xs leading-5 dark:text-gray-200">
                      {`${course.instructor.firstName} ${course.instructor.lastName}`}
                    </p>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-yellow-500 leading-5 dark:text-yellow-400">
                  <p className="">{convertToPersianNumbers("5.0")}</p>
                  <HiMiniStar className="size-4" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </SectionBlock>
      <div className="w-full bg-white h-[512px] px-4 rounded-2xl shadow-sm"></div>
    </div>
  );
};

export default Dashboard;