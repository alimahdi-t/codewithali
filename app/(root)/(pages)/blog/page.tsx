import BlogCard from "@/components/pages/Blog/BlogCard";
import { getPosts } from "@/actions/getPosts";
import CourseFilterOption from "@/components/Course/CourseFilterOption";
import SortOptions from "@/components/Course/SortOptions";
import { postSortFilter } from "@/constants/filters";
import { convertToPersianNumbers } from "@/utils";
import { HiMagnifyingGlass } from "react-icons/hi2";
import NoResult from "@/components/shared/NoResult";

const Blog = async () => {
  const posts = await getPosts();
  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-green-500 w-5 h-5 rounded"></div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            آخرین مقالات
          </h2>
        </div>

        <p className="mt-2 text-lg leading-8 text-gray-600">{`${convertToPersianNumbers(
          posts?.length,
        )} مقاله`}</p>
      </div>

      <div className="flex gap-4 mt-16">
        {/*TODO: Implement editor pick, searching, loading, no result, gird box for best posts*/}
        {/*C1: Sidebar*/}
        <div className="w-[350px] flex flex-col gap-4 max-lg:hidden">
          <div
            className="flex justify-center items-center background-dark900_light50 rounded-lg shadow-lg
          border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 p-4 "
          >
            <input
              placeholder={"جستجو بین مقالات"}
              className="flex-1 border-none outline-none placeholder:text-gray-600"
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
          {posts?.length === 0 && (
            <div className="mt-24">
              <NoResult
                label="مقاله‌ای یافت نشد."
                hiddenCondition={posts?.length !== 0}
              />
            </div>
          )}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-3">
            {posts?.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>

          {/*<Pagination itemCount={64} pageSize={12} currentPage={1} />*/}
          <p className="text-black dark:text-white">Pagination</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;