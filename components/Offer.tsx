"use client";
import { useEffect, useState } from "react";
import { convertToPersianNumbers } from "@/utils";

const Offer = ({
  initialDay,
  initialHours,
  initialMinutes,
  initialSeconds,
}: {
  initialDay: number;
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}) => {
  const [timeLeft, setTimeLeft] = useState({
    day: initialDay,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  // Countdown logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTimeLeft();
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timeLeft]);

  const updateTimeLeft = () => {
    const { day, hours, minutes, seconds } = timeLeft;

    if (seconds > 0) {
      setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
    } else if (minutes > 0) {
      setTimeLeft((prev) => ({
        ...prev,
        minutes: prev.minutes - 1,
        seconds: 59,
      }));
    } else if (hours > 0) {
      setTimeLeft((prev) => ({
        ...prev,
        hours: prev.hours - 1,
        minutes: 59,
        seconds: 59,
      }));
    } else if (day > 0) {
      setTimeLeft((prev) => ({
        ...prev,
        day: prev.day - 1,
        hours: 23,
        minutes: 59,
        seconds: 59,
      }));
    }
  };

  return (
    <div
      className="flex shadow-lg flex-col sm:flex-row lg:flex-col xl:flex-row gap-y-4 gap-x-5 flex-wrap
      justify-between text-center sm:text-right p-4 xl:h-16 bg-white
      rounded-lg"
    >
      <p className="sm:text-xl lg:text-center xl:text-right text-red-500 font-extrabold">
        {convertToPersianNumbers("50% پیشنهاد شگفت انگیز")}
      </p>
      <div className="flex gap-4 justify-center">
        {/* Countdown fields */}
        <TimeField value={timeLeft.day} label="روز" />
        <TimeField value={timeLeft.hours} label="ساعت" />
        <TimeField value={timeLeft.minutes} label="دقیقه" />
        <TimeField value={timeLeft.seconds} label="ثانیه" />
      </div>
    </div>
  );
};

const TimeField = ({ value, label }: { value: number; label: string }) => (
  <p className="text-sm text-gray-700">
    <span className="mx-2 text-xl font-extrabold text-black min-w-6 inline-block">
      {convertToPersianNumbers(value)}
    </span>
    {label}
  </p>
);

export default Offer;
