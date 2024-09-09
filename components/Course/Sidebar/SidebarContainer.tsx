import FilterToggle from "@/components/Course/Sidebar/FilterToggle";
import CategoryFilter from "@/components/Course/Sidebar/CategoryFilter";
import { HiOutlineFolderOpen, HiOutlineCodeBracket } from "react-icons/hi2";
import { courseGroupFilter, courseLevelFilter } from "@/constants/filters";
const BlogCardSideBar = () => {
  return (
    <div className="flex flex-col  gap-4 w-[250px]  max-md:hidden max-h-screen">
      <FilterToggle label="فقط دوره‌های رایگان" />
      <FilterToggle label="درحال پیش فروش" />

      <CategoryFilter
        label="سطح"
        icon={<HiOutlineCodeBracket />}
        tags={courseLevelFilter}
      />
      <CategoryFilter
        label="دسته بندی"
        icon={<HiOutlineFolderOpen />}
        tags={courseGroupFilter}
      />
    </div>
  );
};

export default BlogCardSideBar;
