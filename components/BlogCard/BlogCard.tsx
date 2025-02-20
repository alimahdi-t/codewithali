import { Post, User, Tag as ITag } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { className } from "postcss-selector-parser";
import Link from "next/link";
import moment from "jalali-moment";
import { convertToPersianNumbers } from "@/utils";
import Image from "next/image";
import Tag from "@/components/common/Tag";

interface ExtendedPost extends Post {
  author: Pick<User, "firstName" | "lastName" | "imageUrl">;
  tags: ITag[];
}

interface Props {
  post: ExtendedPost;
  className?: string;
}

const BlogCard = ({ post, ...props }: Props) => {
  const m = moment(post.updatedAt).locale("fa");
  return (
    <article
      className={cn(
        className,
        "flex flex-col items-start justify-between rounded-2xl shadow-md " +
          "background-dark900_light50 border-dark800_light200 dark:shadow-none dark:hover:border-brand-900",
      )}
      {...props}
    >
      {/*--------------- Card Header ---------------*/}
      <div className="relative w-full">
        <Image
          priority={false}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={500}
          src={post.imageUrl}
          alt=""
          className="aspect-[2/1]  w-full rounded-lg bg-gray-100 dark:bg-slate-900 object-cover"
        />
      </div>
      {/*--------------- Card Body ---------------*/}
      <div className="w-full max-w-xl px-4 py-4 flex flex-col gap-3">
        {/*--------------- Card Tags ---------------*/}
        <div className="w-full flex items-center  gap-x-4 text-xs">
          <div className="w-full flex flex-wrap line-clamp-1  gap-1">
            {post.tags.map((tag) => (
              <Tag key={tag.id} tagName={tag.name} href={"#"} />
            ))}
          </div>
        </div>

        {/*--------------- Card Title and Description ---------------*/}
        <div className="group relative mt-2">
          <h3
            className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600
          dark:text-gr"
          >
            <Link href={post.slug} className="line-clamp-2 h-12">
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.content}
          </p>
        </div>

        {/*--------------- Card Footer ---------------*/}
        <div className="relative mt-4 flex justify-between items-center gap-x-4 text-xs leading-6">
          <p className="font-semibold text-gray-900 hover:text-primary duration-500">
            <Link href={"#"}>
              {post.author.firstName + " " + post.author.lastName}
            </Link>
          </p>
          <time dateTime={post.createAt.toString()} className="text-gray-500">
            {convertToPersianNumbers(m.format("YYYY/MM/DD"))}
          </time>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
