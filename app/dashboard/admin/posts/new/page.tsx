import PostForm from "@/components/forms/PostForm";

const NewPostPage = () => {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="font-bold text-xl mb-8">افزودن مقاله</h2>
      <PostForm type="new" role="admin" path={"/dashboard/admin/posts"} />
    </div>
  );
};

export default NewPostPage;
