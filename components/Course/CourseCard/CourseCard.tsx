import { HiOutlineUser, HiMiniStar, HiOutlineUsers } from "react-icons/hi2";
import Link from "next/link";
import {
  calculateDiscount,
  convertToPersianAndFormat,
  convertToPersianNumbers,
} from "@/utils";
import TomanIcon from "@/components/common/TomanIcon";
import DiscountTag from "@/components/Course/CourseCard/DiscountTag";

interface Props {
  course: {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    createdAt: Date;
    price: number;
    userId: number;
    first_name: string;
    last_name: string;
  };
  className?: string;
  key?: string;
  discount?: number;
}

const CourseCard = ({ course, className, discount = 35 }: Props) => {
  return (
    <article
      key={course.id}
      className={`flex flex-col h-full items-start justify-between rounded-lg shadow-md
        bg-white  ${className}`}
    >
      {/*--------------- Card Header ---------------*/}
      <DiscountTag discount={discount!} />
      <div className="relative w-full">
        <img
          width={20}
          height={20}
          src={course.imageUrl}
          alt=""
          className="aspect-[2/1] w-full rounded-lg bg-gray-100 dark:bg-slate-900 object-cover"
        />
      </div>

      {/*--------------- Card Body ---------------*/}
      <div className="w-full px-4 py-4 flex flex-col gap-2">
        {/*--------------- Card Tags ---------------*/}

        {/*--------------- Card Title and Description ---------------*/}
        <div className="group relative">
          <h3
            className="font-semibold text-gray-900 group-hover:text-gray-600
          dark:text-gr"
          >
            <a href={`/courses/${course.id}`}>
              <h3 className="text-sm font-medium inset-0">{course.title}</h3>
            </a>
          </h3>
          <p className="mt-2  line-clamp-2 text-[10px] leading-6 text-gray-400">
            {course.content}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-x-1 text-gray-400 hover:text-brand-700 cursor-pointer">
            <HiOutlineUser className="w-4 h-4" />
            <Link href={"#"}>
              <p className="font-medium text-xs leading-6">
                {`${course.first_name} ${course.last_name}`}
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-yellow-500">
            <p>{convertToPersianNumbers("5.0")}</p>
            <HiMiniStar className="text-yellow-500" />
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-end">
          <p className="font-bold text-xs line-through text-gray-400">
            {convertToPersianAndFormat(course.price)}
          </p>
          <div className="w-full text-gray-400 flex justify-between items-center text-xs">
            <div className="flex items-center gap-x-1 ">
              <HiOutlineUsers className="w-4 h-4" />
              <p className="font-medium text-xs leading-6">
                {convertToPersianNumbers(1245)}
              </p>
            </div>

            <p className="font-extrabold text-sm text-brand-700 flex gap-1 items-center">
              {course.price === 0 || discount === 100 ? (
                "رایگان!"
              ) : (
                <>
                  {convertToPersianAndFormat(
                    calculateDiscount(course.price, {
                      amount: 0,
                      percentage: discount,
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
