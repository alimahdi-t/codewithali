import { HiOutlineFunnel } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

interface Props {
  title: string;
  sheetTitle: string;
  children: ReactNode;
}

export const FilterOption = ({ title, sheetTitle, children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <p className="w-full select-none flex justify-center items-center gap-4 shadow-lg font-semibold leading-6 py-4 px-4 rounded-lg sm:hidden cursor-pointer">
          <HiOutlineFunnel className="w-5 h-5" />
          {title}
        </p>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="p-0 mb-4 text-center">{sheetTitle}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};