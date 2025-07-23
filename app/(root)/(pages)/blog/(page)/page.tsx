import BlogCard from "@/components/pages/Blog/BlogCard";
import { getPostsAction } from "@/actions/posts/get-posts.action";
import CourseFilterOption from "@/components/Course/CourseFilterOption";
import SortOptions from "@/components/Course/SortOptions";
import { postSortFilter } from "@/constants/filters";
import { convertToPersianNumbers } from "@/utils";
import NoResult from "@/components/shared/NoResult";
import { getEditorPickPosts } from "@/actions/posts/get-picked-posts.action";
import ArticleCard from "@/components/pages/Blog/ArticleCard";
import { GetAllPostsParams } from "@/actions/shared.types";
import { SearchForm } from "@/components/forms/SearchForm";
import Pagination from "@/components/shared/Pagination";

interface Props {
  searchParams: Promise<GetAllPostsParams>;
}

const Blog = async (props: Props) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page || 1;
  const pageSize: number = 2;
  const result = await getPostsAction({
    pageSize: pageSize,
    page: page,
    searchQuery: searchParams.searchQuery,
    orderBy: searchParams.orderBy,
    categories: searchParams.categories,
  });

  const editorPickedPosts = await getEditorPickPosts();
  if (!result || !editorPickedPosts) {
    return <p>Loading...</p>;
  }

  const { posts, totalCount } = result;
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-green-500 w-5 h-5 rounded"></div>
          <h2 className="c-text-h2">آخرین مقالات</h2>
        </div>

        <p className="mt-2 text-lg leading-8 text-secondary">{`${convertToPersianNumbers(
          totalCount,
        )} مقاله`}</p>
      </div>

      <div className="flex gap-4 mt-16">
        {/*TODO: loading, no result, gird box for best posts*/}
        <div className="w-[350px] flex flex-col gap-4 max-lg:hidden">
          <SearchForm />

          {editorPickedPosts.length > 0 && (
            <div
              className="background-dark900_light50 rounded-lg shadow-lg
          border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 px-4 py-6"
            >
              <h3 className="font-dana font-medium text-lg leading-5">
                منتخب سردبیر
              </h3>
              <div className="flex flex-col gap-5 mt-4">
                {editorPickedPosts.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>

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

          <Pagination itemCount={totalCount} pageSize={pageSize} />
        </div>
      </div>
    </div>
  );
};

export default Blog;