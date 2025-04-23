import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import React, { useMemo, useState } from "react";
import moment, { Moment } from "jalali-moment";
import { convertToPersianNumbers } from "@/utils";
import { daysOfWeek } from "@/constants";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TooltipWrapper } from "@/components/common/TooltipWrapper";

type CalenderProps = {
  onDateSelect: (date: Moment) => void;
};

const Calender: React.FC<CalenderProps> = ({ onDateSelect }) => {
  const [date, setDate] = useState<Moment>(moment().locale("fa"));
  const today = useMemo(() => moment().locale("fa"), []);
  const [selectedDate, setSelectedDate] = useState<Moment>(today);

  const firstDayOfWeekInCurrentMonth = date.clone().startOf("month").day();

  const prevMonth = date.clone().subtract(1, "month");
  const nextMonth = date.clone().add(1, "month");

  const daysInCurrentMonth = date.daysInMonth();
  const daysInPrevMonth = prevMonth.daysInMonth();
  const daysInNextMonth = nextMonth.daysInMonth(); // Optional, but defined

  const daysOfPrevMonth = Array.from(
    { length: firstDayOfWeekInCurrentMonth + 1 },
    (_, i) => daysInPrevMonth - i,
  ).reverse();

  const daysOfCurrentMonth = Array.from(
    { length: daysInCurrentMonth },
    (_, i) => i + 1,
  );

  const totalDisplayedDays = daysOfPrevMonth.length + daysInCurrentMonth;

  const remainingDays = useMemo(() => {
    return totalDisplayedDays % 7 === 0 ? 0 : 7 - (totalDisplayedDays % 7);
  }, [totalDisplayedDays]);

  const daysOfNextMonth = useMemo(() => {
    return Array.from({ length: remainingDays }, (_, i) => i + 1);
  }, [remainingDays]);

  const isToday = (day: number) =>
    today.isSame(date, "month") &&
    day === today.date() &&
    today.isSame(date, "year");

  const isSelected = (day: number) =>
    selectedDate &&
    selectedDate.isSame(date, "month") &&
    day === selectedDate.date() &&
    selectedDate.isSame(date, "year");

  const handleDayClick = (day: number) => {
    const newSelectedDate = date.clone().date(day);
    setSelectedDate(newSelectedDate);
  };

  const handleSelectDate = () => {
    onDateSelect(selectedDate);
  };

  return (
    <Dialog>
      <DialogTitle className="p-0 h-0 w-0 hidden"></DialogTitle>

      <DialogTrigger className="p-0 m-0 block">
        <Input
          className="leading-6 mt-0"
          placeholder={selectedDate.format("dddd، D MMM")}
        />
      </DialogTrigger>

      <DialogContent className="scale-75">
        <div className="mx-auto w-full max-w-md py-8 px-8 mt-6 flex flex-col justify-center rounded text-center select-none bg-white">
          <div className="grid grid-cols-7">
            <TooltipWrapper label={"ماه بعد"}>
              <HiMiniChevronRight
                className="mx-auto col-span-1 z-10 w-8 h-8 rounded-full p-1.5 hover:bg-slate-100 cursor-pointer"
                onClick={() => setDate(date.clone().add(1, "month"))}
              />
            </TooltipWrapper>
            <p className="col-span-5 inset-0 flex items-center justify-center font-bold text-lg">
              {`${date.format("MMMM")} ${convertToPersianNumbers(
                date.format("YYYY"),
              )}`}
            </p>
            <TooltipWrapper label={"ماه قبل"}>
              <HiMiniChevronLeft
                className="mx-auto col-span-1 z-10 w-8 h-8 rounded-full p-1.5 hover:bg-slate-100 cursor-pointer"
                onClick={() => setDate(date.clone().subtract(1, "month"))}
              />
            </TooltipWrapper>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-y-4 max-sm:gap-y-2 grid-rows-7">
            {daysOfWeek.map((day) => (
              <span
                key={day.enShort}
                className="mx-auto text-stone-600 w-10 h-10 flex items-center justify-center"
              >
                {day.short}
              </span>
            ))}

            {daysOfPrevMonth.map((day) => (
              <span
                key={`prev-${day}`}
                className="mx-auto text-center text-gray-400 w-10 h-10 rounded-full flex items-center justify-center"
              >
                {convertToPersianNumbers(day)}
              </span>
            ))}

            {daysOfCurrentMonth.map((day) => (
              <span
                key={day}
                onClick={() => handleDayClick(day)}
                className={`mx-auto cursor-pointer w-10 h-10 font-semibold rounded-full flex items-center justify-center ${
                  isToday(day) && isSelected(day)
                    ? "bg-slate-900 text-white"
                    : isSelected(day)
                    ? "bg-slate-900 text-white"
                    : isToday(day)
                    ? "bg-slate-600 text-white"
                    : "hover:bg-stone-100"
                }`}
              >
                {convertToPersianNumbers(day)}
              </span>
            ))}

            {daysOfNextMonth.map((day) => (
              <span
                key={`next-${day}`}
                className="mx-auto text-center text-gray-400 w-10 h-10 rounded-full flex items-center justify-center"
              >
                {convertToPersianNumbers(day)}
              </span>
            ))}
          </div>

          <DialogClose asChild>
            <Button
              onClick={() => {
                setSelectedDate(today);
              }}
              variant="outline"
              className="w-full mx-auto py-4 px-6 mt-4 rounded-lg transition"
            >
              انتخاب امروز
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              onClick={handleSelectDate}
              className="w-full mx-auto py-4 px-6 mt-4 rounded-lg text-white transition"
            >
              انتخاب
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Calender;