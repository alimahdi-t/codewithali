import { Post, Tag as ITag, User } from "@prisma/client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import moment from "jalali-moment";
import { convertToPersianNumbers, extractTextFromHTML } from "@/utils";
import Tag from "@/components/common/Tag";
import ILink from "@/components/common/ILink";
import { ImageCard } from "@/components/common/card/ImageCard";

interface ExtendedPost extends Post {
  author: Pick<User, "firstName" | "lastName" | "imageUrl" | "username">;
  tags: ITag[];
}

interface Props {
  post: ExtendedPost;
  className?: string;
}

const BlogCard = ({ post, className, ...props }: Props) => {
  const m = moment(post.updatedAt).locale("fa");
  return (
    <article
      className={cn(
        className,
        "flex flex-col h-full items-start justify-between c-card c-card-animation",
      )}
      {...props}
    >
      <div className="relative w-full">
        <ImageCard url={post.imageUrl} />
      </div>

      <div className="w-full px-4 py-4 flex flex-col gap-3">
        <div className="w-full flex items-center  gap-x-4 text-xs">
          <div className="w-full flex flex-wrap line-clamp-1  gap-1">
            {post.tags.map((tag) => (
              <Tag key={tag.id} tagName={tag.name} href={"#"} />
            ))}
          </div>
        </div>

        <div className="group relative mt-2">
          <h3
            className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600
          dark:text-gr"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="line-clamp-2 h-12 c-card-title"
            >
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-3 leading-6 c-card-description">
            {extractTextFromHTML(post.content)}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center gap-x-4 text-xs leading-6 text-gray-800 dark:text-gray-300">
          <ILink href={post.author.username ?? "#"}>
            <p className="dark:text-gray-300 font-semibold">
              {post.author.firstName + " " + post.author.lastName}
            </p>
          </ILink>
          <time dateTime={post.createAt.toString()} className="font-medium">
            {convertToPersianNumbers(m.format("YYYY/MM/DD"))}
          </time>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;