import { DashboardStatBox } from "@/components/dashboard/DashboardStatBox";

const Dashboard = () => {
  return (
    <div className="w-full space-y-8">
      <section className="lg:dark:darker-gradient-app bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg">
        <DashboardStatBox
          iconSrc="/images/dashboard/courses-empty.png"
          value="19 دوره"
          label="دوره ها من"
        />
        <DashboardStatBox
          iconSrc="/images/dashboard/questions-empty.png"
          value="0 پرسش"
          label="پرسش پاسخ"
        />
        <DashboardStatBox
          iconSrc="/images/dashboard/tickets-empty.png"
          value="0 تیکت"
          label="تیکت ها"
        />
        <DashboardStatBox
          iconSrc="/images/dashboard/transactions-empty.png"
          value={
            <>
              0 <span className="text-label font-regular mr-0.5">تومان</span>
            </>
          }
          label="کیف پول"
        />
      </section>
      <h1 className="text-2xl font-bold leading-6">داشبورد</h1>
      <div className="w-full bg-white h-[512px] px-4 rounded-2xl shadow-sm"></div>
    </div>
  );
};

export default Dashboard;