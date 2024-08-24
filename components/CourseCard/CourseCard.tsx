import { HiOutlineUser, HiMiniStar, HiOutlineUsers } from "react-icons/hi2";
import Link from "next/link";

interface Props {
  post: {
    id: number;
    title: string;
    href: string;
    description: string;
    imageUrl: string;
    date: string;
    dateTime: string;
    category: { title: string; href: string };
    author: {
      name: string;
      role: string;
      href: string;
      imageUrl: string;
    };
  };
}

const CourseCard = ({ post }: Props) => {
  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between rounded-md shadow-md
      bg-white"
    >
      {/*--------------- Card Header ---------------*/}
      <div className="relative w-full">
        <img
          width={20}
          height={20}
          src={post.imageUrl}
          alt=""
          className="aspect-[2/1] w-full rounded-md bg-gray-100 dark:bg-slate-900 object-cover"
        />
      </div>
      {/*--------------- Card Body ---------------*/}
      <div className="max-w-xl px-4 py-4 flex flex-col gap-2">
        {/*--------------- Card Tags ---------------*/}

        {/*--------------- Card Title and Description ---------------*/}
        <div className="group relative">
          <h3
            className="text font-semibold leading-6 text-gray-900 group-hover:text-gray-600
          dark:text-gr"
          >
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
            {post.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-x-1 text-gray-400 hover:text-brand-700 cursor-pointer">
            <HiOutlineUser className="w-4 h-4" />
            <Link href={post.author.href}>
              <p className="font-medium text-xs leading-6">
                {post.author.name}
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-yellow-500">
            <p>5.0</p>
            <HiMiniStar className="text-yellow-500" />
          </div>
        </div>

        <hr />

        <div className="text-gray-400 flex justify-between items-center text-xs">
          <div className="flex items-center gap-x-1 ">
            <HiOutlineUsers className="w-4 h-4" />
            <p className="font-medium text-xs leading-6">1245</p>
          </div>
          <div>
            <p className="font-bold text-xs line-through">689</p>
            <p className="font-extrabold text-sm text-brand-700">689$</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
