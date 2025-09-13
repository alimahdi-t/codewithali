import { getAdminStatsAction } from "@/actions/adminDashboard/get-admin-stats.action";
import { toPersianNumber } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AdminDashboard = async () => {
  const {
    usersCount,
    coursesCount,
    postCount,
    ordersCount,
    messageStatusCountMap,
    commentStatusCountMap,
  } = await getAdminStatsAction();
  if (!messageStatusCountMap) return null;

  const stats = [
    {
      title: "تعداد کاربران",
      value: usersCount,
      path: "/dashboard/admin/users",
    },
    {
      title: "تعداد دوره‌ها",
      value: coursesCount,
      path: "/dashboard/admin/courses",
    },
    { title: "تعداد پست‌ها", value: postCount, path: "/dashboard/admin/posts" },
    {
      title: "تعداد سفارشات",
      value: ordersCount,
      path: "/dashboard/admin/payments",
    },
  ];

  return (
    <div className="space-y-4 flex flex-col">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Card
            key={i}
            className="relative flex justify-center items-center group overflow-hidden"
          >
            {/* Hover content */}

            <Link
              href={stat.path}
              className="absolute inset-0 flex items-center justify-center
                opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-300 ease-in-out select-none
                cursor-pointer"
            >
              مشاهده
            </Link>

            {/* Default content */}
            <div
              className="
              text-center transition-all duration-300 ease-in-out
              opacity-100 group-hover:opacity-0 group-hover:scale-75
            "
            >
              <h3 className="font-black text-2xl leading-7">
                {toPersianNumber(stat.value)}
              </h3>
              <p className="text-base font-medium truncate max-w-full">
                {stat.title}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="flex-1">
          <CardHeader>
            <div className={"flex justify-between items-center"}>
              <CardTitle>نظرات</CardTitle>
              <Link href={"/dashboard/admin/comments"}>
                <Button className="text-xs" variant="ghost">
                  مشاهده
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-info" />
                <span>همه نظرات</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(
                  commentStatusCountMap.PENDING +
                    commentStatusCountMap.APPROVED +
                    commentStatusCountMap.REJECTED,
                )}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-warning" />
                <span>در انتظار تایید</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(commentStatusCountMap.PENDING)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-success" />
                <span>تایید شده</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(commentStatusCountMap.APPROVED)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-error" />
                <span>رد شده</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(commentStatusCountMap.REJECTED)}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <div className={"flex justify-between items-center"}>
              <CardTitle>پیام‌ها</CardTitle>
              <Link href={"/dashboard/admin/messages"}>
                <Button className="text-xs" variant="ghost">
                  مشاهده
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-info" />
                <span>همه پیام‌ها</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(
                  messageStatusCountMap.PENDING +
                    messageStatusCountMap.IN_PROGRESS +
                    messageStatusCountMap.RESOLVED,
                )}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-warning" />
                <span>در انتظار رسیدگی</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(messageStatusCountMap.PENDING)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-success" />
                <span>در حال بررسی</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(messageStatusCountMap.IN_PROGRESS)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-action-error" />
                <span>بسته شده</span>
              </div>
              <span className="font-semibold">
                {toPersianNumber(messageStatusCountMap.RESOLVED)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      {/*<div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-4">*/}
      {/*  <div className="flex flex-col gap-4 col-span-1">*/}
      {/*    <Card className="flex-1">*/}
      {/*      <CardHeader>*/}
      {/*        <div className={"flex justify-between items-center"}>*/}
      {/*          <CardTitle>نظرات</CardTitle>*/}
      {/*          <Link href={"/dashboard/admin/comments"}>*/}
      {/*            <Button className="text-xs" variant="ghost">*/}
      {/*              مشاهده*/}
      {/*            </Button>*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </CardHeader>*/}
      {/*      <CardContent className="space-y-2 text-sm">*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-info" />*/}
      {/*            <span>همه نظرات</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-warning" />*/}
      {/*            <span>در انتظار تایید</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-success" />*/}
      {/*            <span>تایید شده</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-error" />*/}
      {/*            <span>رد شده</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*    <Card className="flex-1">*/}
      {/*      <CardHeader>*/}
      {/*        <div className={"flex justify-between items-center"}>*/}
      {/*          <CardTitle>پیام‌ها</CardTitle>*/}
      {/*          <Link href={"/dashboard/admin/messages"}>*/}
      {/*            <Button className="text-xs" variant="ghost">*/}
      {/*              مشاهده*/}
      {/*            </Button>*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </CardHeader>*/}
      {/*      <CardContent className="space-y-2 text-sm">*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-info" />*/}
      {/*            <span>همه پیام‌ها</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-warning" />*/}
      {/*            <span>در انتظار رسیدگی</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-success" />*/}
      {/*            <span>بررسی شده</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center justify-between bg-gray-300/20 py-4 px-4 rounded-lg">*/}
      {/*          <div className="flex items-center gap-x-2">*/}
      {/*            <div className="size-3 rounded-full bg-action-error" />*/}
      {/*            <span>بسته شده</span>*/}
      {/*          </div>*/}
      {/*          <span className="font-semibold">{toPersianNumber(4)}</span>*/}
      {/*        </div>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*  </div>*/}

      {/*  <div className="col-span-3">*/}
      {/*    <Card>*/}
      {/*      <CardHeader>*/}
      {/*        <CardTitle>نمودار فروش</CardTitle>*/}
      {/*      </CardHeader>*/}
      {/*    </Card>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default AdminDashboard;