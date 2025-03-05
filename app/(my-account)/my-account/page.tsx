import {
  HiOutlineBookOpen,
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";
import { convertToPersianNumbers } from "@/utils";

import { IconType } from "react-icons";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <OverviewBox
          label="دوره های من"
          value={`${convertToPersianNumbers(17)} دوره`}
          Icon={HiOutlineBookOpen}
        />
        <OverviewBox
          label="موجودی حساب"
          value={`${convertToPersianNumbers(0)} تومان`}
          Icon={HiOutlineCurrencyDollar}
          className="bg-green-500"
        />
        <OverviewBox
          label="مجموع پرداخت ها"
          value={`${convertToPersianNumbers(0)} تومان`}
          Icon={HiOutlineCreditCard}
          className="bg-yellow-400"
        />
        <OverviewBox
          label="تیکت های من"
          value={`${convertToPersianNumbers(6)} تیکت`}
          Icon={HiOutlineCurrencyDollar}
          className="bg-violet-500"
        />
      </div>
      <h1 className="text-2xl font-bold leading-6">داشبورد</h1>
      <div className="w-full bg-white h-[512px] px-4 rounded-2xl shadow-sm"></div>
    </div>
  );
};

export default Dashboard;

const OverviewBox = ({
  label,
  value,
  Icon,
  className = "bg-sky-400",
}: {
  label: string;
  value: string;
  Icon: IconType;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-min rounded-2xl shadow-sm flex items-center gap-2 ${className}`}
    >
      <Icon className="text-white w-20 h-20 p-4" />
      <div className="space-y-2">
        <h4 className="text-white text-sm font-semibold">{label}</h4>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  );
};