import Link from "next/link";
import { cn } from "@/lib/utils";
import { ImageCard } from "@/components/common/card/ImageCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { convertToPersianNumbers } from "@/utils";
import { HiMiniStar } from "react-icons/hi2";
import { ArrowLeft02Icon } from "@/public/assets/icons/huge-icon";

interface CourseCardProps {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  instructor: {
    firstName: string;
    lastName: string;
    username: string | null;
    imageUrl: string | null;
  };
  rating?: number | string;
  className?: string;
}

export function DashboardPurchasedCourseCard({
  id,
  slug,
  title,
  description,
  imageUrl,
  instructor,
  rating = "5.0",
  className,
}: CourseCardProps) {
  return (
    <article
      key={id}
      className={cn(
        "flex flex-col h-full items-start justify-between c-card",
        className,
      )}
    >
      <div className="relative w-full">
        <Link href={`/courses/${slug}`}>
          <ImageCard url={imageUrl} />
        </Link>
      </div>

      <div className="w-full px-4 py-4 flex flex-col gap-2">
        <div className="group flex flex-col gap-3">
          <h3 className="font-semibold text-lg leading-6">
            <Link
              href={`/courses/${slug}`}
              className="text-base line-clamp-2 h-12 c-card-title"
            >
              {title}
            </Link>
          </h3>
          <p className="line-clamp-2 leading-6 c-card-description">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-x-1 cursor-pointer">
            <Avatar className="w-10 h-10">
              <AvatarImage src={instructor.imageUrl || ""} />
              <AvatarFallback>{instructor.firstName.charAt(0)}</AvatarFallback>
            </Avatar>
            <Link
              href={instructor.username ?? "#"}
              className="font-semibold text-gray-900 ap-text-main hover:text-primary duration-500"
            >
              <p className="font-medium text-xs leading-5 dark:text-gray-200">
                {`${instructor.firstName} ${instructor.lastName}`}
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-yellow-500 leading-5 dark:text-yellow-400">
            <p>{convertToPersianNumbers(rating)}</p>
            <HiMiniStar className="size-4" />
          </div>
        </div>
      </div>
      <Link href={"#"} className="cursor-pointer w-full">
        <div className="py-3 flex justify-center items-center bg-brand-300/20 space-x-0.5">
          <p className="text-brand-600 text-sm">ادامه یادگیری</p>
          <ArrowLeft02Icon className="text-brand-600 size-5" />
        </div>
      </Link>
    </article>
  );
}