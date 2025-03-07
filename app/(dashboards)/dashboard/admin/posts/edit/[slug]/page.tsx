import { notFound } from "next/navigation";
import { getPost } from "@/actions/getPost.action";
import PostForm from "@/components/forms/PostForm";

interface Props {
  params: Promise<{ slug: string }>;
}

const EditPostPage = async (props: Props) => {
  const params = await props.params;
  const post = await getPost({ slug: params.slug });
  if (!post) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="font-bold text-xl mb-8">ویرایش مقاله</h2>
      <PostForm
        type="edit"
        role="admin"
        path={"/dashboard/admin/posts"}
        initialData={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          content: post.content,
          imageUrl: post.imageUrl,
          readingTime: post.readingTime.toString(),
          isEditorPick: post.isEditorPick ?? false,
          authorId: post.authorId.toString(),
          tags: [],
        }}
      />
    </div>
  );
};

export default EditPostPage;