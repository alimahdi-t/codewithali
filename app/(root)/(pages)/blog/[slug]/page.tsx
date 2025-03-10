import "./styles.css";
import { getPost } from "@/actions/posts/getPost.action";
import Image from "next/image";
import ReadOnly from "@/components/RichTextEditor/ReadOnly";
import { convertToPersianNumbers } from "@/utils";
import { Separator } from "@/components/ui/separator";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineUser,
} from "react-icons/hi2";
import moment from "jalali-moment";

interface Props {
  params: Promise<{ slug: string }>;
}

const BlogPost = async (props: Props) => {
  const params = await props.params;
  const post = await getPost({ slug: params.slug });
  if (!post) {
    return null;
  }
  console.log(post);
  const m = moment(post.createAt).locale("fa");
  return (
    <div className="max-w-5xl mx-auto bg-white shadow rounded-lg">
      <Image
        src={post.imageUrl}
        alt="blog post image."
        width={1400}
        height={700}
        className="aspect[2/1] rounded-lg"
      />
      <span
        className={`relative bottom-10 right-4 bg-gray-100 px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center`}
      >
        زمان مورد نیاز برای خواندن:
        {` ${convertToPersianNumbers(post.readingTime)} دقیقه `}
      </span>

      <div className="px-6 py-6">
        <h1 className="font-bold text-4xl">{post.title}</h1>
      </div>
      <div className="mt-6 mb-2 text-gray-600 flex items-center justify-between px-6">
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center gap-x-1">
            <HiOutlineUser className="size-5" />
            <p className="text-sm font-normal">
              {post.author.firstName.concat(" ", post.author.lastName)}
            </p>
          </div>
          |
          <p className="text-sm font-normal">
            {m.format("ddd DD MMM YYYY ساعت HH:MM:ss")}
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-x-1">
            <HiOutlineChatBubbleBottomCenterText className="size-5" />
            <p className="text-sm    font-normal">{post.readingTime}</p>
          </div>
        </div>
      </div>
      <Separator />

      <div
        className="px-6 py-6 leading-7 text-justify"
        // dangerouslySetInnerHTML={{ __html: post.content }}
      >
        <ReadOnly content={post.content} />
      </div>
    </div>
  );
};

export default BlogPost;