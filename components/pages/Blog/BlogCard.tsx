import { Post, Tag as ITag, User } from "@prisma/client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import moment from "jalali-moment";
import { convertToPersianNumbers } from "@/utils";
import Image from "next/image";
import Tag from "@/components/common/Tag";
import ILink from "@/components/common/ILink";

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
        "flex flex-col items-start justify-between rounded-2xl shadow-md " +
          "background-dark900_light50 border-dark800_light200 dark:shadow-none dark:hover:border-brand-900",
      )}
      {...props}
    >
      {/*--------------- Card Header ---------------*/}
      <div className="relative w-full">
        <Image
          priority={true}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={500}
          src={post.imageUrl}
          alt=""
          className="aspect-2/1  w-full rounded-lg bg-gray-100 dark:bg-slate-900 object-cover"
        />
      </div>
      {/*--------------- Card Body ---------------*/}
      <div className="w-full px-4 py-4 flex flex-col gap-3">
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
            <Link href={`/blog/${post.slug}`} className="line-clamp-2 h-12">
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.content}
          </p>
        </div>

        {/*--------------- Card Footer ---------------*/}
        <div className="mt-4 flex justify-between items-center gap-x-4 text-xs leading-6">
          <ILink href={post.author.username ?? "#"}>
            <p>{post.author.firstName + " " + post.author.lastName}</p>
          </ILink>
          <time dateTime={post.createAt.toString()} className="text-gray-500">
            {convertToPersianNumbers(m.format("YYYY/MM/DD"))}
          </time>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;