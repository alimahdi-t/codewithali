import { SectionBlock } from "@/components/shared/SectionBlock";
import { getCourses } from "@/actions/courses/get-courses.action";
import CourseCard from "@/components/pages/courses/CourseCard";
import { getPostsAction } from "@/actions/posts/get-posts.action";
import BlogCard from "@/components/pages/Blog/BlogCard";

export default async function Home() {
  const courses = await getCourses({});
  const posts = await getPostsAction();
  return (
    <div className="max-w-7xl mx-auto py-5">
      <SectionBlock title={"آخرین دورهای ما"}>
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SectionBlock>

      {/*  TODO: conditional rendering if course or post not exist*/}
      <SectionBlock title={"آخـــرین مقالات ما"}>
        {posts?.map((post) => <BlogCard key={post.id} post={post} />)}
      </SectionBlock>
      <SectionBlock title={"نقشه های راه برای شروع"}></SectionBlock>
    </div>
  );
}