"use client";
import { ReactNode, useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

export const ShowMoreWrapper = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="w-full relative"
        style={{ height: isOpen ? "auto" : "800px", overflow: "hidden" }}
      >
        {children}

        {/* Gradient Overlay */}
        {!isOpen && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        )}
      </div>
      <button
        style={{ marginTop: 16 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-center px-6 text-primary text-sm font-normal py-2.5 border-primary border rounded-lg cursor-pointer hover:bg-primary/10 transition-all"
      >
        <span className="flex justify-center items-center gap-x-1">
          {isOpen ? "مشاهده کمتر مطلب" : "مشاهده بیشتر مطلب"}
          {isOpen ? (
            <span>
              <HiOutlineChevronUp className="size-4" />
            </span>
          ) : (
            <HiOutlineChevronDown className="size-4" />
          )}
        </span>
      </button>
    </div>
  );
};