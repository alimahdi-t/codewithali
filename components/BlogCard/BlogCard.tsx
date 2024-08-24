import Tag from "@/components/common/Tag";

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

const BlogCard = ({ post }: Props) => {
  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between border-2 rounded-2xl shadow-md
      background-dark900_light50 border-dark800_light200 dark:shadow-none dark:hover:border-brand-900"
    >
      {/*--------------- Card Header ---------------*/}
      <div className="relative w-full">
        <img
          width={20}
          height={20}
          src={post.imageUrl}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-slate-900 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        {/*<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />*/}
      </div>
      {/*--------------- Card Body ---------------*/}
      <div className="max-w-xl px-4 py-4 flex flex-col gap-3">
        {/*--------------- Card Tags ---------------*/}
        <div className="flex items-center gap-x-4 text-xs">
          {/*<time dateTime={post.datetime} className="text-gray-500">*/}
          {/*  {post.date}*/}
          {/*</time>*/}
          {/* Badge*/}
          <div className="flex flex-wrap gap-1.5">
            <Tag tagName={post.category.title} href={post.category.href} />
            <Tag tagName={"React"} href={post.category.href} />
            <Tag tagName={"Cyber Security"} href={post.category.href} />
            <Tag tagName={"Android"} href={post.category.href} />
            <Tag tagName={"Next JS"} href={post.category.href} />
            <Tag tagName={"My SQL Database"} href={post.category.href} />
          </div>
        </div>

        {/*--------------- Card Title and Description ---------------*/}
        <div className="group relative">
          <h3
            className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600
          dark:text-gr"
          >
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>

        {/*--------------- Card Footer ---------------*/}
        <div className="relative mt-4 flex items-center gap-x-4">
          <img
            src={post.author.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </a>
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
