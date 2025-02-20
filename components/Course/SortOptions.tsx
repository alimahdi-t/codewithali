"use client";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter, useSearchParams } from "next/navigation";

interface SortOption {
  name: string;
  value: string;
}

interface SortOptionsProps {
  filters: SortOption[];
  queryParam?: string;
  basePath: string;
  defaultSort?: SortOption;
}

const SortOptions = ({
  defaultSort = { name: "جدید ترین", value: "newest" },
  basePath,
  filters,
  queryParam = "orderBy",
}: SortOptionsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams().get(queryParam);

  const [selectedSortOption, setSelectedSortOption] =
    useState<SortOption>(defaultSort);

  const handleSort = (item: SortOption) => {
    const params = new URLSearchParams(window.location.search);

    // Replace the existing 'orderBy' parameter or add a new one
    if (item.value) {
      params.set("orderBy", item.value);
    }

    // Generate the query string
    const query = params.toString();
    const queryString = query ? `?${query}` : "";

    // Navigate to the new URL
    router.push(`${basePath}${queryString}`);

    // Update the selected sort option
    setSelectedSortOption(item);
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
            {filters?.map((item, index) => (
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
          {filters.map((item, index) => (
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

export default SortOptions;
