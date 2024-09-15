"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomCheckbox from "@/components/CustomCheckbox";
import { ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  label: string;
  icon?: ReactNode;
  tags: { name: string; value: string }[];
  filterParam: string;
}

const CategoryFilter = ({ label, icon, tags, filterParam }: Props) => {
  const router = useRouter();

  const handleOnChange = (value: string, checked: boolean) => {
    const params = new URLSearchParams(window.location.search);

    if (checked) {
      // Add the new filter value to the query if it's not already present
      const existingFilters = params.getAll(filterParam);
      if (!existingFilters.includes(value)) {
        params.append(filterParam, value);
      }
    } else {
      // Remove the filter value from the query
      const filters = params.getAll(filterParam);

      // Clear existing values
      params.delete(filterParam);

      // Re-add all values except the one being unchecked
      filters.forEach((filter) => {
        if (filter !== value) {
          params.append(filterParam, filter);
        }
      });
    }

    // Navigate to the new URL with the updated query parameters
    router.push(
      "/courses" + (params.toString() ? "?" + params.toString() : ""),
    );
  };

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
              <CustomCheckbox
                key={tag.value}
                label={tag.name}
                onChange={(checked) => handleOnChange(tag.value, checked)} // Pass onChange handler
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryFilter;
