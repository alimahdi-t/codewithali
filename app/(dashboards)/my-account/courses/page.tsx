import { getUserPurchasedCoursesAction } from "@/actions/courses/get-user-purchased-courses.action";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ImageCard } from "@/components/common/card/ImageCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { convertToPersianNumbers } from "@/utils";
import { HiMiniStar } from "react-icons/hi2";

export default async function UserCoursesPage() {
  const courses = await getUserPurchasedCoursesAction();
  console.log(courses);
  return (
    <div className="grid grid-cols-4 gap-4">
      {courses?.map((course) => (
        <article
          key={course.id}
          className={cn(
            "flex flex-col h-full items-start justify-between c-card",
          )}
        >
          <div className="relative w-full">
            <Link href={`/courses/${course.slug}`}>
              <ImageCard url={course.imageUrl} />
            </Link>
          </div>

          <div className="w-full px-4 py-4 flex flex-col gap-2">
            <div className="group flex flex-col gap-3">
              <h3 className="font-semibold text-lg leading-6">
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-base line-clamp-2 h-12 c-card-title"
                >
                  {course.title}
                </Link>
              </h3>
              <p className="line-clamp-2 leading-6 c-card-description">
                {course.description}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-x-1 cursor-pointer">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={course.instructor?.imageUrl as string} />
                  <AvatarFallback>
                    {course.instructor.firstName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Link
                  href={course.instructor.username ?? "#"}
                  className="font-semibold text-gray-900 ap-text-main hover:text-primary duration-500"
                >
                  <p className="font-medium text-xs leading-5 dark:text-gray-200">
                    {`${course.instructor.firstName} ${course.instructor.lastName}`}
                  </p>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-1 text-sm text-yellow-500 leading-5 dark:text-yellow-400">
                <p className="">{convertToPersianNumbers("5.0")}</p>
                <HiMiniStar className="size-4" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}