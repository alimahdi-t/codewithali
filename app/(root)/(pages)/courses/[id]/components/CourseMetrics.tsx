import {
  HiOutlineClock,
  HiOutlineInformationCircle,
  HiOutlineUsers,
} from "react-icons/hi2";
import { convertToPersianNumbers } from "@/utils";

interface Props {
  // courseStatus: string;
}

const CourseMetrics = ({}: Props) => {
  const items = [
    {
      label: "وضعیت دوره",
      value: "به اتمام رسیده",
      icon: HiOutlineInformationCircle,
    },
    {
      label: "مدت زمان دوره",
      value: `${convertToPersianNumbers(32)} ساعت`,
      icon: HiOutlineClock,
    },
    {
      label: "تعداد دانشجو",
      value: convertToPersianNumbers(1276),
      icon: HiOutlineUsers,
    },
    {
      label: "تعداد دانشجو",
      value: convertToPersianNumbers(1276),
      icon: HiOutlineUsers,
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white py-3 px-5 flex gap-4 items-center grid-cols-1 rounded-lg shadow border border-gray-100"
        >
          <item.icon className="w-10 h-10 text-green-500" />
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">{item.label}</p>
            <p className="text-xs">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseMetrics;
