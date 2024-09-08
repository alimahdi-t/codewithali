import CourseCard from "@/components/Course/CourseCard";
import BlogCardSideBar from "@/components/BlogCard/BlogCardSideBar";
import { getCourses } from "@/lib/actions/course.action";
import { convertToPersianNumbers } from "@/utils";
import CourseSortOptions from "@/components/Course/CourseSortOptions";
import CourseFilterOption from "@/components/Course/CourseFilterOption";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    dateTime: "2020-03-16",
    tags: [{ title: "Marketing", href: "#" }],
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Courses = async () => {
  const courses = await getCourses();
  console.log(courses);

  return (
    <div className="max-w-7xl lg:px-12 px-6 flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-brand-500 w-5 h-5 rounded"></div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            دوره‌ها
          </h2>
        </div>

        <p className="mt-2 text-lg leading-8 text-gray-600">{`${convertToPersianNumbers(
          36,
        )} عنوان آموزشی`}</p>
      </div>
      <div className="flex gap-4 mt-16">
        <div className="max-lg:hidden">
          <BlogCardSideBar />
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <CourseFilterOption className="sm:hidden" />
            <CourseSortOptions />
          </div>
          <div
            className="w-full h-min grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-4 "
          >
            {/*  -----------------------------------------------------------*/}

            {courses.map((course) => (
              <>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
                <span className="col-span-1">
                  <CourseCard course={course} />
                </span>
              </>
            ))}
          </div>
          {/* TODO: Pagination*/}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Courses;

const Pagination = () => {
  return (
    <div className="w-full flex gap-2 justify-center mt-4">
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
      <div className="w-4 h-4 p-4 bg-white shadow-lg rounded text-sm flex justify-center items-center">
        1
      </div>
    </div>
  );
};
