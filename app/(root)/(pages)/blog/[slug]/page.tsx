import "./styles.css";
import { getPost } from "@/actions/posts/getPost.action";
import Image from "next/image";
import { convertToPersianNumbers } from "@/utils";
import { Separator } from "@/components/ui/separator";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineUser,
} from "react-icons/hi2";
import moment from "jalali-moment";
import { BreadCrumb } from "@/components/shared/BreadCrump";
import ReadOnly from "@/components/RichTextEditor/ReadOnly";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CommentSection } from "@/app/(root)/(pages)/courses/[slug]/_components/CommentSection";
import CompletionProgress from "@/app/(root)/(pages)/courses/[slug]/_components/CompletionProgress";

interface Props {
  params: Promise<{ slug: string }>;
}

const BlogPost = async (props: Props) => {
  const params = await props.params;
  const post = await getPost({ slug: params.slug });
  if (!post) {
    return null;
  }
  const m = moment(post.createAt).locale("fa");
  return (
    <>
      <BreadCrumb
        path={{ href: "", label: post.title }}
        parentPath={{ label: "مقالات", href: "/blog" }}
      />

      <div className="w-full flex flex-row gap-4 flex-1 pb-12 mt-12 max-lg:flex-col">
        <div className="flex-1 flex flex-col gap-4">
          <Card id="additional-info" className="flex-1">
            <CardHeader>
              <div className="max-sm:mx-6">
                <Image
                  src={post.imageUrl}
                  alt="blog post image."
                  width={1400}
                  height={700}
                  className="aspect[2/1] rounded-lg "
                />
                <span
                  className={`relative bottom-10 right-4 bg-gray-100 px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center`}
                >
                  زمان مورد نیاز برای خواندن:
                  {` ${convertToPersianNumbers(post.readingTime)} دقیقه `}
                </span>

                <div className="py-6">
                  <h1 className="font-bold text-4xl">{post.title}</h1>
                </div>
                <div className="mt-6 mb-2 text-gray-600 flex items-center justify-between px-6">
                  <div className="flex gap-x-2 items-center">
                    <div className="flex items-center gap-x-1">
                      <HiOutlineUser className="size-5" />
                      <p className="text-sm font-normal">
                        {post.author.firstName.concat(
                          " ",
                          post.author.lastName,
                        )}
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
                      <p className="text-sm    font-normal">
                        {post.readingTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="px-2 leading-7 text-justify">
                <ReadOnly content={post.content} />
              </div>
            </CardContent>
          </Card>

          <Card id="comments">
            <CardHeader>
              <CommentSection
                targetId={post.id}
                targetType={"course"}
                noCommentMessage="نظری برای این مقاله ثبت نشده است."
              />
            </CardHeader>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-[300px] max-lg:w-full flex flex-col gap-4 h-full sticky top-10">
          <CompletionProgress progress={100} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;