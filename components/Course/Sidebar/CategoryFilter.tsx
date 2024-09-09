import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ReactNode } from "react";

interface Props {
  label: string;
  icon?: ReactNode;
  tags: { name: string; value: string }[];
}

const CategoryFilter = ({ label, icon, tags }: Props) => {
  return (
    <div className="w-full bg-white shadow-md rounded-md flex items-center justify-between p-4">
      <Accordion
        type="single"
        collapsible={true}
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="text-xs text-slate-900 p-0">
            <div className="flex items-center text-base font gap-2">
              {icon && <span className="text-xl">{icon}</span>}

              <span>{label}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t border-gray-200 my-4 py-4 flex flex-col gap-4">
            {tags.map((tag) => (
              <CustomCheckbox key={tag.value} label={tag.name} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryFilter;
