import BlogCard from "@/components/BlogCard/BlogCard";
import { getPosts } from "@/lib/actions/getPosts";
import CourseFilterOption from "@/components/Course/CourseFilterOption";
import SortOptions from "@/components/Course/SortOptions";
import { postSortFilter } from "@/constants/filters";
import Pagination from "@/components/shared/Pagination";

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="max-w-7xl flex flex-col gap-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            آخرین مقالات
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            با مقالات تخصصی ما کسب‌وکار خود را توسعه دهید.
          </p>
        </div>
        <div className="w-full flex gap-4 flex-row mt-4">
          <div
            className="w-[350px] flex flex-col gap-4 background-dark900_light50 rounded-lg shadow-lg
          border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 px-4 py-6 max-lg:hidden"
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
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4">
              <CourseFilterOption className="sm:hidden" />
              <SortOptions basePath="/blog" filters={postSortFilter} />
            </div>
            <div
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-4 col-span-3"
            >
              {/*  -----------------------------------------------------------*/}
              {posts?.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          </div>
        </div>
        {/*<Pagination itemCount={64} pageSize={12} currentPage={1} />*/}
        <p className="text-black dark:text-white">Pagination</p>
      </div>
    </div>
  );
};

export default Blog;
