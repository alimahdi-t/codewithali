import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Props {
  type: "course" | "post";
  title: string | undefined;
  slug: string | undefined;
}

const statusVariants: Record<
  "course" | "post",
  { text: string; className: string }
> = {
  post: {
    text: "مقاله",
    className: "text-pink-500 bg-pink-200 dark:bg-pink-500/50",
  },
  course: {
    text: "دوره",
    className:
      "text-purple-600 dark:text-purple-400 bg-purple-200 dark:bg-purple-500/50 hover:text-purple-50 hover:bg-purple-500/70 dark:hover:text-white dark:hover:bg-purple-500",
  },
};

export const CommentType = ({ type, title, slug }: Props) => {
  const variant = statusVariants[type];
  let path = "#";
  if (type === "course") {
    path = `/courses/${slug}`;
  } else if (type === "post") {
    path = `/posts/${slug}`;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={path}>
            <span
              className={`${variant.className} px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap cursor-pointer transition-all duration-300`}
            >
              {variant.text}
            </span>
          </Link>
        </TooltipTrigger>
        {title && (
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};