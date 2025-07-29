import { SectionBlock } from "@/components/shared/SectionBlock";
import { getCourses } from "@/actions/courses/get-courses.action";
import CourseCard from "@/components/pages/courses/CourseCard";
import { getPostsAction } from "@/actions/posts/get-posts.action";
import BlogCard from "@/components/pages/Blog/BlogCard";
import Image from "next/image";
import { getPurchasedCourseIds } from "@/actions/order/get-purchased-course-ids.action";
import { currentUser } from "@/lib/auth";

export default async function Home() {
  const coursesResult = await getCourses({ page: 1, pageSize: 12 });
  const postsResult = await getPostsAction({});

  if (!coursesResult || !postsResult) {
    return null;
  }
  const user = await currentUser();
  const purchasedCourseIds = user
    ? await getPurchasedCourseIds(Number(user.id))
    : [];
  const { posts } = postsResult;
  const { courses } = coursesResult;
  // await fakeDelay(1000);

  const learningPaths = [
    {
      slug: "fundamentals",
      title: "مبانی برنامه‌نویسی",
      description:
        "دوره‌های ضروری برای هر کسی که می‌خواهد برنامه‌نویس حرفه‌ای شود. شامل ساختمان داده، الگوریتم‌ها، الگوهای طراحی و موارد دیگر!",
      imageUrl:
        "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/fundamentals.svg",
    },
    {
      slug: "front-end",
      title: "توسعه فرانت‌اند",
      description:
        "تمام دوره‌هایی که برای ساخت وب‌سایت‌های زیبا نیاز دارید: HTML، CSS، جاوااسکریپت، React و بیشتر!",
      imageUrl:
        "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/front-end.svg",
    },
    {
      slug: "back-end",
      title: "توسعه بک‌اند",
      description:
        "دوره‌هایی برای ساخت APIهای قدرتمند برای وب و موبایل. Node، Django، ASP.NET، MySQL و موارد دیگر!",
      imageUrl:
        "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/back-end.svg",
    },
    {
      slug: "mobile-development",
      title: "توسعه موبایل",
      description:
        "دوره‌هایی کامل برای ساخت اپلیکیشن‌های حرفه‌ای و کراس پلتفرم با استفاده از React Native.",
      imageUrl:
        "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg",
    },
    // {
    //   slug: "game-development",
    //   title: "توسعه بازی",
    //   description: "دوره‌های بنیادی برای ساخت بازی‌های رایانه‌ای.",
    //   imageUrl:
    //     "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/game.svg",
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto py-5">
      {courses && courses.length > 0 && (
        <SectionBlock
          title={"آخرین دورهای ما"}
          link={{ title: "مشاهده همه", href: "/courses" }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              purchased={purchasedCourseIds.includes(course.id)}
            />
          ))}
        </SectionBlock>
      )}

      {posts && posts?.length > 0 && (
        <SectionBlock
          title={"آخـــرین مقالات ما"}
          link={{ title: "مشاهده همه", href: "/blog" }}
        >
          {posts?.map((post) => <BlogCard key={post.id} post={post} />)}
        </SectionBlock>
      )}

      <SectionBlock title={"نقشه های راه برای شروع"}>
        {learningPaths.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col rounded-xl overflow-hidden border"
          >
            <Image src={item.imageUrl} width={400} height={300} alt={""} />
            <div className="flex flex-col flex-grow p-4">
              <h3 className="font-semibold font-dana">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 flex-grow">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </SectionBlock>
    </div>
  );
}