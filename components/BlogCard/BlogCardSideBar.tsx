import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import CustomCheckbox from "@/components/CustomCheckbox";

const BlogCardSideBar = () => {
  return (
    <div className="flex flex-col  gap-4 w-[250px]  max-md:hidden max-h-screen">
      <div className="w-full bg-white shadow-md rounded-lg flex items-center justify-between p-4">
        <Label
          htmlFor="airplane-mode"
          className="font-semibold text-sm text-slate-900"
        >
          فقط دوره‌های رایگان
        </Label>
        <Switch id="airplane-mode" />
      </div>

      <div className="w-full bg-white shadow-md rounded-lg flex items-center justify-between p-4">
        <Label
          htmlFor="airplane-mode"
          className="font-semibold text-sm text-slate-900"
        >
          درحال پیش فروش
        </Label>
        <Switch id="airplane-mode" />
      </div>
      <div className="w-full bg-white shadow-md rounded-md flex items-center justify-between p-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-xs font-bold text-slate-900 p-0">
              دسته بندی
            </AccordionTrigger>
            <AccordionContent className="border-t border-gray-200 my-4 py-4 flex flex-col gap-4">
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
              <CustomCheckbox label={"Front"} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default BlogCardSideBar;
