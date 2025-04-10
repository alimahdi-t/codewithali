import { getCommentsByCourseId } from "@/actions/comments/get-comment-by-course.action";
import { toast } from "sonner";
import { Comment } from "@/components/shared/Comment/Comment";

interface Props {
  courseId: number;
}
//TODO: make this section reusable
export const CommentSection = async ({ courseId }: Props) => {
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
          targetId={courseId}
          targetType={"course"}
          commentId={comment.id}
        >
          <div className="my-4 space-y-4">
            {comment.replies?.map((reply) => (
              <div key={reply.id} className="mr-4 pr-4 border-r">
                <Comment
                  key={reply.id}
                  date={reply.createdAt}
                  content={reply.content}
                  author={reply.author.firstName.concat(
                    " ",
                    reply.author.lastName,
                  )}
                  targetId={courseId}
                  targetType={"course"}
                  commentId={reply.id}
                  replyAllowed={false}
                  isReply={true}
                />
              </div>
            ))}
          </div>
        </Comment>
      ))}
    </div>
  );
};