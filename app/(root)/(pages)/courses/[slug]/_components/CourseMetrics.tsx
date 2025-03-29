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
      label: "مدت زمان",
      value: `${convertToPersianNumbers(32)} ساعت`,
      icon: HiOutlineClock,
    },
    {
      label: "اخرین به روزرسانی",
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
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="py-3 px-5 flex gap-4 items-center grid-cols-1 c-card"
        >
          <span className="p-4 bg-primary/10 rounded-full">
            <item.icon className="w-8 h-8 text-primary" />
          </span>
          <div className="flex flex-col gap-2 text-t">
            <p className="font-semibold text-sm text-t ">{item.label}</p>
            <p className="text-xs text-sub-t font-medium">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseMetrics;