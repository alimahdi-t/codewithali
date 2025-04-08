import { getCommentsByCourseId } from "@/actions/comments/get-comment-by-course.action";
import { toast } from "sonner";
import { Comment } from "@/components/common/Comment";

interface Props {
  courseId: number;
}

export const CourseCommentSection = async ({ courseId }: Props) => {
  const response = await getCommentsByCourseId({ courseId: courseId });

  if (response.error) {
    toast.error(response.error);
    return null;
  }

  const { comments } = response;
  if (!comments) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4 mt-8">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          date={comment.createdAt}
          content={comment.content}
          author={comment.author.firstName.concat(" ", comment.author.lastName)}
        />
      ))}
    </div>
  );
};