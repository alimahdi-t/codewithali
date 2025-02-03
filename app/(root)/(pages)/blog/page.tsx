"use client";
import BlogCard from "@/components/BlogCard/BlogCard";
import { getTopArticles } from "@/lib/actions/blog.action";
import ArticleCard from "@/components/BlogCard/ArticleCard";

const posts = [
  {
    id: 1,
    title:
      "گشت‌وگذار در دنیای هوش مصنوعی (AI)؛ تکنولوژی هوشمندی که غوغا به‌پا کرد",
    href: "#",
    description:
      "هوش مصنوعی چیست؟ ابزاری که داده‌ها را تحلیل می‌کند، کدهای اشتباه‌تان را به‌شکلی صحیح می‌نویسد، تقویم محتوایی تنظیم می‌کند، نگارش یک مقاله وب‌سایت را انجام می‌دهد، اطلاعات سطح وب را گردآوری می‌کند، پیش‌بینی نیازهای مشتریان را با اطلاعات کافی انجام می‌دهد و در مجموع، یک دستیار باهوش و دانا است. \n" +
      "\n" +
      "با رونمایی از ChatGPT در نوامبر 2022 و هیاهوی پس از آن، اهمیت آموزش هوش مصنوعی و برگزاری دوره یادگیری ماشین بیش از پیش برجسته شد؛ زیرا افراد در سراسر دنیا به انجام وظایف روزانه و گسترش خلاقیت با کمک AI روی آوردند، شرکت‌های مطرح استخدام متخصصان هوش مصنوعی را در برنامه خود گنجاندند و علاقه‌مندان به این حوزه کنجکاوی بیشتری به‌خرج دادند.\n" +
      "\n" +
      "ما در این مقاله از کوئرا بلاگ، به بررسی جواب «هوش مصنوعی چیست؟» و مباحث مهمی که پیرامون آن مطرح می‌شوند، خواهیم پرداخت؛ تاریخچه، اهداف، زیرشاخه‌ها، انواع AI و تفاوت هر یک، ترندهای پیش‌رو در سال 2024، رشته هوش مصنوعی در ایران، بازار کار آن و غیره از عنوان‌هایی هستند که در این نوشتار زیر ذره‌بین قرار می‌گیرند.\n" +
      "\n",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    dateTime: "2020-03-16",
    tags: [{ title: "Marketing", href: "#" }],
    author: {
      name: "سید علی مهدی",
      // role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // {
  //   id: 2,
  //   title: "Boost your conversion rate",
  //   href: "#",
  //   description:
  //     "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  //   date: "Mar 16, 2020",
  //   dateTime: "2020-03-16",
  //   category: { title: "Marketing", href: "#" },
  //   author: {
  //     name: "Michael Foster",
  //     role: "Co-Founder / CTO",
  //     href: "#",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  //   },
  // },
  // {
  //   id: 3,
  //   title: "Boost your conversion rate",
  //   href: "#",
  //   description:
  //     "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  //   date: "Mar 16, 2020",
  //   dateTime: "2020-03-16",
  //   category: { title: "Marketing", href: "#" },
  //   author: {
  //     name: "Ali Mahdi",
  //     role: "Co-Founder / CTO",
  //     href: "#",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  // },
  // {
  //   id: 4,
  //   title: "Boost your conversion rate",
  //   href: "#",
  //   description:
  //     "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  //   date: "Mar 16, 2020",
  //   dateTime: "2020-03-16",
  //   category: { title: "Marketing", href: "#" },
  //   author: {
  //     name: "Ali Mahdi",
  //     role: "Co-Founder / CTO",
  //     href: "#",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  // },
];
const Blog = async () => {
  const topArticles = await getTopArticles();
  return (
    <div className="py-24 sm:py-32 flex justify-center">
      <div className="max-w-7xl lg:px-12 px-6 flex flex-col gap-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            آخرین مطالب
          </h2>
          {/*<p className="mt-2 text-lg leading-8 text-gray-600">*/}
          {/*  Learn how to grow your business with our expert advice.*/}
          {/*</p>*/}
        </div>
        <div className="w-full flex gap-4 flex-row mt-4">
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4">
              <div className="w-full h-12 bg-gray-900 rounded-lg bg-amber-300"></div>
              <div className="w-full h-12 bg-gray-900 rounded-lg"></div>
              <div className="w-full h-12 bg-gray-900 rounded-lg"></div>
              <div className="w-full h-12 bg-gray-900 rounded-lg"></div>
            </div>
            <div
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-4 col-span-3"
            >
              {/*  -----------------------------------------------------------*/}
              {posts.map((post) => (
                <>
                  <BlogCard key={post.id} post={post} />
                  <BlogCard key={post.id} post={post} />
                  <BlogCard key={post.id} post={post} />
                </>
              ))}
            </div>
          </div>
          <div
            className="w-[350px] flex flex-col gap-4 background-dark900_light50  border-2 rounded-2xl shadow-lg
          border-dark800_light200 dark:shadow-none dark:hover:border-brand-900 px-4 py-6"
          >
            <h3 className="font-dana font-medium text-lg leading-5">
              منتخب سردبیر
            </h3>
            <div className="flex flex-col gap-4">
              {topArticles.map((article) => (
                <ArticleCard article={article} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-black dark:text-white">Pagination</p>
      </div>
    </div>
  );
};

export default Blog;
