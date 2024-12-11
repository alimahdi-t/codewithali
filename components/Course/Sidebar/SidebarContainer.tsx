import FilterToggle from "@/components/Course/Sidebar/FilterToggle";
import CategoryFilter from "@/components/Course/Sidebar/CategoryFilter";
import { HiOutlineFolderOpen, HiOutlineCodeBracket } from "react-icons/hi2";
import { courseGroupFilter, courseLevelFilter } from "@/constants/filters";
const BlogCardSideBar = () => {
  return (
    <div className="flex flex-col  gap-4 w-[250px]  max-md:hidden max-h-screen">
      <FilterToggle label="فقط دوره‌های رایگان" filterParam="isFree" />
      <FilterToggle label="درحال پیش فروش" filterParam="isPreOrder" />

      <CategoryFilter
        label="سطح"
        icon={<HiOutlineCodeBracket />}
        tags={courseLevelFilter}
        filterParam="levels"
      />
      <CategoryFilter
        label="دسته بندی"
        icon={<HiOutlineFolderOpen />}
        tags={courseGroupFilter}
        filterParam="categories"
      />
    </div>
  );
};

export default BlogCardSideBar;
