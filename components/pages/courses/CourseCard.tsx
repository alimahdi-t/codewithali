import { HiMiniStar, HiOutlineUsers } from "react-icons/hi2";
import {
  calculateDiscount,
  convertToPersianAndFormat,
  convertToPersianNumbers,
} from "@/utils";
import TomanIcon from "@/components/common/TomanIcon";
import DiscountTag from "@/components/pages/courses/DiscountTag";
import { Course, Discount, User } from "@prisma/client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ILink from "@/components/common/ILink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

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
        "flex flex-col h-full items-start justify-between rounded-lg shadow-md bg-white c-card-animation",
        className,
      )}
      {...props}
    >
      {/*--------------- Card Header ---------------*/}
      <DiscountTag discount={course.discount?.percentage} />
      <div className="relative w-full">
        <Link href={`/courses/${course.slug}`}>
          <Image
            priority={true}
            width={400}
            height={200}
            src={course.imageUrl}
            alt=""
            className={`aspect-2/1 w-full rounded-lg bg-gray-100 dark:bg-slate-900 object-cover`}
          />
        </Link>
      </div>

      {/*--------------- Card Body ---------------*/}
      <div className="w-full px-4 py-4 flex flex-col gap-2">
        {/*--------------- Card Tags ---------------*/}

        {/*--------------- Card Title and Description ---------------*/}
        <div className="group flex flex-col gap-3">
          <h3 className="font-semibold text-lg leading-6">
            <ILink
              href={`/courses/${course.slug}`}
              className="text-base font-medium line-clamp-2 h-12"
            >
              {course.title}
            </ILink>
          </h3>
          <p className="line-clamp-2 text-sm leading-6 text-gray-600">
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
            <ILink href={course.instructor.username ?? "#"}>
              <p className="font-medium text-xs leading-7">
                {`${course.instructor.firstName} ${course.instructor.lastName}`}
              </p>
            </ILink>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-yellow-500">
            <p>{convertToPersianNumbers("5.0")}</p>
            <HiMiniStar className="text-yellow-500" />
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-end">
          <p className="font-bold text-xs line-through text-gray-400">
            {course.price !== 0 && course.discount?.percentage !== 0
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

            <p className="font-extrabold text-base text-brand-700 flex gap-1 items-center">
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
                  <TomanIcon className=" stroke-gray-800" />
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