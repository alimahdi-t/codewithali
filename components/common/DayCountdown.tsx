"use client";

import { useEffect, useState } from "react";
import moment from "jalali-moment";
import { convertToPersianNumbers } from "@/utils";

interface Props {
  date: Date;
}

export const DayCountdown = ({ date }: Props) => {
  const [timeLeft, setTimeLeft] = useState<{
    past: boolean;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const target = moment(date);
      const isPast = now.isAfter(target);
      const duration = moment.duration(
        isPast ? now.diff(target) : target.diff(now),
      );

      setTimeLeft({
        past: isPast,
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [date]);

  if (!timeLeft) {
    return <div className="text-sm text-gray-700">در حال بارگذاری...</div>;
  }

  const getRelativePastTime = () => {
    const { days, hours, minutes, seconds } = timeLeft;

    if (days > 0) return `${convertToPersianNumbers(days)} روز گذشته`;
    if (hours > 0) return `${convertToPersianNumbers(hours)} ساعت گذشته`;
    if (minutes > 0) return `${convertToPersianNumbers(minutes)} دقیقه گذشته`;
    return `${convertToPersianNumbers(seconds)} ثانیه گذشته`;
  };

  const timeStr = `${convertToPersianNumbers(
    String(timeLeft.hours).padStart(2, "0"),
  )}:${convertToPersianNumbers(
    String(timeLeft.minutes).padStart(2, "0"),
  )}:${convertToPersianNumbers(String(timeLeft.seconds).padStart(2, "0"))}`;

  if (timeLeft.past) {
    return (
      <span className="px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap text-action-error bg-action-light-error dark:bg-action-error/30">
        {getRelativePastTime()}
      </span>
    );
  } else {
    return timeLeft.days > 0 ? (
      <span className="px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap text-action-success bg-action-light-success dark:bg-action-success/30">
        {`${convertToPersianNumbers(timeLeft.days)} روز باقی‌مانده`}
      </span>
    ) : (
      <span className="w-36 px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap text-action-success bg-action-light-success dark:bg-action-success/30">
        {`زمان باقی‌مانده: ${timeStr}`}
      </span>
    );
  }
};

export default DayCountdown;