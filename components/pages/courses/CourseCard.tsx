import { HiMiniStar, HiOutlineUsers } from "react-icons/hi2";
import {
  calculateDiscount,
  convertToPersianAndFormat,
  convertToPersianNumbers,
} from "@/utils";
import TomanIcon from "@/components/common/TomanIcon";
import DiscountTag from "@/components/pages/courses/DiscountTag";
import { Course, Discount, User } from "@/prisma/client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ImageCard } from "@/components/common/card/ImageCard";

interface ExtendedCourse extends Course {
  instructor: Pick<
    User,
    "id" | "firstName" | "lastName" | "imageUrl" | "username"
  >;
  discount: Discount | null;
}

interface Props {
  course: ExtendedCourse;
  className?: string;
}

const CourseCard = ({ course, className, ...props }: Props) => {
  return (
    <article
      key={course.id}
      className={cn(
        "flex flex-col h-full items-start justify-between c-card c-card-animation",
        className,
      )}
      {...props}
    >
      <DiscountTag discount={course.discount?.percentage} />
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

        <hr />

        <div className="flex flex-col items-end">
          <p className="font-bold leading-5 h-5 text-xs line-through text-gray-400">
            {course.discount?.percentage && course.price !== 0
              ? convertToPersianAndFormat(course.price)
              : " "}
          </p>
          <div className="w-full text-gray-400 flex justify-between items-center text-xs">
            <div className="flex items-center gap-x-1 ">
              <HiOutlineUsers className="w-4 h-4" />
              <p className="font-medium text-xs leading-6">
                {convertToPersianNumbers(1245)}
              </p>
            </div>

            <p className="font-extrabold text-lg text-primary flex gap-1 items-center">
              {course.price === 0 || course.discount?.percentage === 100 ? (
                "رایگان!"
              ) : (
                <>
                  {convertToPersianAndFormat(
                    calculateDiscount(course.price, {
                      amount: 0,
                      percentage: course.discount?.percentage,
                    }),
                  )}
                  <TomanIcon className=" stroke-gray-800 dark:stroke-gray-200" />
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;