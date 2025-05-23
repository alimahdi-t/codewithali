import { getCommentsByTarget } from "@/actions/comments/get-comment-by-target.action";
import { toast } from "sonner";
import { Comment } from "@/components/shared/Comment/Comment";
import { NoComment } from "@/components/shared/Comment/NoComment";
import { AddComment } from "@/components/shared/Comment/AddComment";

interface Props {
  targetId: number;
  targetType: "post" | "course";
  noCommentMessage?: string;
}
export const CommentSection = async ({
  targetId,
  targetType,
  noCommentMessage,
}: Props) => {
  const response = await getCommentsByTarget({
    targetId: targetId,
    targetType: targetType,
  });

  if (response.error) {
    toast.error(response.error);
    return null;
  }

  const { comments } = response;

  if (comments?.length === 0) {
    return (
      <>
        <AddComment
          targetId={targetId}
          targetType={targetType}
          commentCount={0}
        />
        <NoComment message={noCommentMessage} />
      </>
    );
  }

  return (
    <>
      <AddComment
        targetId={targetId}
        targetType={targetType}
        commentCount={comments?.length ?? 0}
      />
      <div className="flex flex-col gap-y-4 mt-8">
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            date={comment.createdAt}
            content={comment.content}
            author={comment.author.firstName.concat(
              " ",
              comment.author.lastName,
            )}
            targetId={targetId}
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
                    targetId={targetId}
                    targetType={targetType}
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
    </>
  );
};