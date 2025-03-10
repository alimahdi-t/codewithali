import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";

const MessagePage = () => {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
        <StatisticsCard count={10} label="همه پیام ها" variant="info" />
        <StatisticsCard
          count={3}
          label="پیام‌های در انتظار رسیدگی"
          variant="warning"
          status="PENDING"
        />
        <StatisticsCard
          count={7}
          label="پیام‌های در حال بررسی"
          variant="success"
          status="IN_PROGRESS"
        />
        <StatisticsCard
          count={5}
          label="پیام‌های بسته ‌شده"
          variant="error"
          status="RESOLVED"
        />
      </div>

      <div></div>
    </div>
  );
};

export default MessagePage;