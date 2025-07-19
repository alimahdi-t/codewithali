import Image from "next/image";
import { EditorPickPostType } from "@/actions/posts/get-picked-posts.action";
import Link from "next/link";

interface Props {
  article: EditorPickPostType;
}

const ArticleCard = ({ article, ...props }: Props) => {
  return (
    <Link href={"/blog/" + article.slug}>
      <div className="flex justify-center items-start gap-1.5" {...props}>
        <Image
          width={400}
          height={400}
          className="aspect-4/3 w-16 rounded object-cover"
          src={article.imageUrl}
          alt=""
        />
        <div className="flex flex-col gap-1 group cursor-pointer transition delay-300">
          <h4 className="text-sm font-light font-dana group-hover:text-primary text-dark-700_light-300 line-clamp-3 text-justify">
            {article.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;