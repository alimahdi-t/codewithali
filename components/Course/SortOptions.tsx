"use client";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  filters = [],
  queryParam = "orderBy",
}: SortOptionsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSortValue = searchParams.get(queryParam) || defaultSort.value;
  const selectedSortOption =
    filters.find((item) => item.value === currentSortValue) || defaultSort;

  const handleSort = (item: SortOption) => {
    const params = new URLSearchParams(searchParams.toString());

    if (item.value === defaultSort.value) {
      params.delete(queryParam); // Remove if it's the default value
    } else {
      params.set(queryParam, item.value);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <p className="w-full flex justify-center items-center gap-4 shadow-lg font-semibold leading-6 py-4 px-4 rounded-lg sm:hidden cursor-pointer">
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
            {filters.map((item, index) => (
              <SheetClose key={index} asChild>
                <li
                  onClick={() => handleSort(item)}
                  className={`w-full border-t border-t-stone-100 leading-6 py-6 cursor-pointer ${
                    item.value === selectedSortOption.value
                      ? "text-blue-400"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </li>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <div className="w-full px-8 flex items-center gap-6 max-sm:hidden c-card ">
        <span className="font-bold text-sm py-4 flex items-center gap-1 dark:text-gray-200">
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
                  ? "text-blue-400 border-y-2 border-y-blue-400 dark:text-blue-300 dark:border-y-blue-300"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              <span className="flex items-center gap-1">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SortOptions;