"use client";

import { useEffect, useState } from "react";
import { toPersianNumber } from "@/utils";

interface Props {
  date?: Date | null;
  percentage?: number;
}

export const TimerCountdown = ({ date, percentage }: Props) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (!date) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(date).getTime();
      const distance = target - now;

      if (distance <= 0) {
        setExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setExpired(false);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const formatTime = (num: number) =>
    toPersianNumber(num.toString().padStart(2, "0"));

  if (!date || !percentage || expired) {
    return;
  }

  return (
    <div className="my-4 flex max-md:flex-col max-md:gap-y-4 items-center p-4 bg-gray-200/30 dark:bg-gray-100/5 rounded-lg justify-between text-xl">
      <p className="font-bold text-xl max-md:text-2xl text-red-500 dark:text-red-500/90">
        {toPersianNumber(`${percentage}% تخفیف تا `)}
      </p>
      <div className="flex gap-3 text-muted-foreground">
        <div>
          <span className="w-10 text-dark-900_light-200 text-center font-bold text-2xl inline-block">
            {toPersianNumber(timeLeft.days)}
          </span>
          <span className="text-base font-light">روز</span>
        </div>
        |
        <div>
          <span className="w-10 text-dark-900_light-200 text-center font-bold text-2xl inline-block">
            {toPersianNumber(timeLeft.hours)}
          </span>
          <span className="text-base font-light">ساعت</span>
        </div>
        |
        <div>
          <span className="w-10 text-dark-900_light-200 text-center font-bold text-2xl inline-block">
            {toPersianNumber(timeLeft.minutes)}
          </span>
          <span className="text-base font-light">دقیقه</span>
        </div>
        |
        <div className="">
          <span className="w-10 text-action-error text-center font-bold text-2xl inline-block">
            {toPersianNumber(timeLeft.seconds)}
          </span>
          <span className="text-base font-light">ثانیه</span>
        </div>
      </div>
    </div>
  );
};