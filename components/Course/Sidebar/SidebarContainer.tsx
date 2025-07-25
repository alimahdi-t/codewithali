import FilterToggle from "@/components/Course/Sidebar/FilterToggle";
import CategoryFilter from "@/components/Course/Sidebar/CategoryFilter";
import { HiOutlineCodeBracket } from "react-icons/hi2";

import { courseLevelFilter } from "@/constants/filters";

const BlogCardSideBar = () => {
  return (
    <div className="flex flex-col  gap-4 max-h-screen sticky top-4">
      <FilterToggle label="فقط دوره‌های رایگان" filterParam="isFree" />
      <FilterToggle label="درحال پیش فروش" filterParam="isPreOrder" />

      <CategoryFilter
        label="سطح"
        icon={<HiOutlineCodeBracket />}
        tags={courseLevelFilter}
        filterParam="levels"
      />
    </div>
  );
};

export default BlogCardSideBar;