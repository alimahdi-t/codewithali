"use client";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import { courseSortFilter } from "@/constants/filters";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

interface SortOption {
  name: string;
  value: string;
}

const CourseSortOptions = () => {
  const router = useRouter();

  const [selectedSortOption, setSelectedSortOption] = useState<SortOption>({
    name: "جدید ترین",
    value: "newest",
  });

  const handleSort = (item: SortOption) => {
    setSelectedSortOption({ name: item.name, value: item.value });
    const query = `?sortBy=${item.value}`;
    router.push("/courses" + query);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <p
            className="w-full flex justify-center items-center gap-4 shadow-lg
           font-semibold leading-6 py-4 px-4 rounded-lg sm:hidden"
          >
            <HiOutlineArrowsUpDown className="w-5 h-5" />
            {selectedSortOption.name}
          </p>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle className="p-0 mb-4 text-center">
              مرتب سازی بر اساس
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <ul className="list-none flex flex-col items-center">
            {courseSortFilter.map((item, index) => (
              <SheetClose key={index} asChild>
                <li
                  onClick={() => handleSort(item)}
                  className={`w-full border-t border-t-stone-100 leading-6 py-6 cursor-pointer ${
                    item.value === selectedSortOption.value
                      ? "text-blue-400"
                      : "text-gray-600"
                  }  `}
                >
                  {item.name}
                </li>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <div className="w-full bg-white shadow-md rounded-lg px-8 flex items-center gap-6 max-sm:hidden">
        <span className="font-bold text-sm py-4 flex items-center gap-1">
          <HiOutlineArrowsUpDown className="w-5 h-5" />
          مرتب سازی بر اساس:
        </span>
        <ul className="list-none flex items-center gap-8">
          {courseSortFilter.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSort(item)}
              className={`font-semibold text-sm py-4 cursor-pointer ${
                item.value === selectedSortOption.value
                  ? "text-blue-400 border-y-2 border-y-blue-400 "
                  : "text-gray-600"
              }  `}
            >
              <span className="flex items-center gap-1">{item.name} </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseSortOptions;
