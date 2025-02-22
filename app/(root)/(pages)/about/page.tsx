"use client";

import Link from "next/link";
import Image from "next/image";

const people = [
  {
    name: "رضا مرادی",
    role: "توسعه‌دهنده بک‌اند",
    imageUrl: "/images/team/member_01.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "محمد حسینی",
    role: "مهندس داده",
    imageUrl: "/images/team/member_02.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "سارا احمدی",
    role: "مدیر محصول",
    imageUrl: "/images/team/member_03.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "کامران نوری",
    role: "برنامه‌نویس موبایل",
    imageUrl: "/images/team/member_04.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "نسترن رضایی",
    role: "تحلیل‌گر داده",
    imageUrl: "/images/team/member_05.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "بهنام فرهادی",
    role: "توسعه‌دهنده فول‌استک",
    imageUrl: "/images/team/member_06.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col ">
      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          با آموزش صحیح، مسیر موفقیت در برنامه‌نویسی را هموار کنید
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          بهترین دوره‌های آموزشی برنامه‌نویسی برای همه‌ی سطوح، از مبتدی تا
          پیشرفته. یادگیری اصولی با محتوای به‌روز و کاربردی.
        </p>
      </div>

      {/* بخش محتوایی */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                آموزش‌های ما شامل مفاهیم پایه‌ای و پیشرفته‌ی برنامه‌نویسی است.
                با یادگیری مهارت‌های جدید، فرصت‌های شغلی بهتری خواهید داشت.
              </p>
              <p className="mt-8">
                ما به شما کمک می‌کنیم تا به یک برنامه‌نویس حرفه‌ای تبدیل شوید.
                آموزش‌ها شامل پروژه‌های عملی و تمرین‌های تعاملی هستند.
              </p>
            </div>
            <div>
              <p>
                مسیر یادگیری شما را با دوره‌های متنوع در زمینه‌های مختلف از جمله
                وب، موبایل و هوش مصنوعی هموار کرده‌ایم.
              </p>
              <p className="mt-8">
                یادگیری آنلاین، پشتیبانی دائمی و دسترسی به جدیدترین تکنولوژی‌ها
                از ویژگی‌های کلیدی دوره‌های ماست.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-40 flex flex-col items-center ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            تیم ما
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ما یک گروه پویا از افراد هستیم که به کاری که انجام می‌دهیم علاقه
            داریم و متعهد به ارائه بهترین نتایج برای مشتریانمان هستیم.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people?.map((person) => (
            <li
              key={person.name}
              className="rounded-lg shadow-md bg-white flex flex-col items-center pb-8"
            >
              <Image
                alt=""
                priority={false}
                width={400}
                height={400}
                src={person.imageUrl}
                className="aspect-[3/2] w-full rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* بخش دریافت پروژه */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            نیاز به یک پروژه حرفه‌ای دارید؟
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            تیم ما آماده‌ی طراحی و پیاده‌سازی پروژه‌های سفارشی در زمینه‌های
            مختلف برنامه‌نویسی است. همین حالا درخواست خود را ثبت کنید!
          </p>
          {/*TODO: Set external link later*/}
          <Link
            href="#"
            className="mt-6 inline-block bg-green-600 px-6 py-3 text-white rounded-lg hover:bg-lime-700
            duration-200 text-sm font-semibold"
          >
            ثبت درخواست پروژه
          </Link>
        </div>
      </div>

      {/* بخش تماس با ما */}
      <div className="relative mt-32 sm:mt-40 flex justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-xl px-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              با ما در ارتباط باشید
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              اگر سوالی دارید یا نیاز به راهنمایی دارید، با ما تماس بگیرید. ما
              همیشه آماده کمک به شما هستیم.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-brand-600 px-6 py-3 text-white rounded-lg hover:bg-brand-700 duration-200 text-sm font-semibold"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
