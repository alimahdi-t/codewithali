import CourseFilterOption from "@/components/Course/CourseFilterOption";
import SortOptions from "@/components/Course/SortOptions";
import { Skeleton } from "@/components/ui/skeleton";
import CourseCardLoading from "@/app/(root)/(pages)/courses/CourseCardLoading";
import { postSortFilter } from "@/constants/filters";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function LoadingCoursePage() {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-green-500 w-5 h-5 rounded"></div>
          <h2 className="c-text-h2">آخرین مقالات</h2>
        </div>
        <Skeleton className="w-32 h-7 bg-gray-400 rounded-full" />
      </div>
      <div className="flex gap-4 mt-16">
        <div className="w-[350px] flex flex-col gap-4 max-lg:hidden">
          <div
            className="flex justify-center items-center background-dark900_light50 rounded-lg shadow-lg
          border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 p-4 "
          >
            <input
              placeholder={"جستجو بین مقالات"}
              className="flex-1 border-none outline-hidden placeholder:text-gray-600"
            />
            <HiMagnifyingGlass className="w-6 h-6 text-gray-600" />
          </div>
          <div
            className="background-dark900_light50 rounded-lg shadow-lg
          border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 px-4 py-6"
          >
            <h3 className="font-dana font-medium text-lg leading-5">
              منتخب سردبیر
            </h3>
            <div className="flex flex-col gap-4">
              {/*{topArticles.map((article) => (*/}
              {/*  <ArticleCard key={article.id} article={article} />*/}
              {/*))}*/}
            </div>
          </div>
        </div>

        {/*---*/}
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-4">
            <CourseFilterOption className="sm:hidden" />
            <SortOptions basePath="/blog" filters={postSortFilter} />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-3">
            {posts.map((course, index) => (
              <CourseCardLoading key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}