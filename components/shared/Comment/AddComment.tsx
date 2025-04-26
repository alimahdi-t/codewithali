"use client";
import { Button } from "@/components/ui/button";
import { CommentForm } from "@/components/forms/CommentForm";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { convertToPersianNumbers } from "@/utils";

interface Props {
  targetId: number;
  targetType: "course" | "post";
  commentCount: number;
  showCommentCount?: boolean;
}

export const AddComment = ({
  targetId,
  targetType,
  commentCount,
  showCommentCount = true,
}: Props) => {
  const [showForm, setShowForm] = useState(false);
  const session = useSession();
  const handleOnClick = () => {
    if (session.status === "unauthenticated") {
      toast.warning("لطفا ابتدا وارد حساب خود شوید.");
      return;
    }
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h3 className="text-lg font-medium">نظرات</h3>
          {showCommentCount && commentCount > 0 && (
            <span className="text-sm">{`(${convertToPersianNumbers(
              commentCount,
            )})`}</span>
          )}
        </div>

        <Button size="sm" onClick={handleOnClick}>
          ثبت نظر
        </Button>
      </div>
      <CommentForm
        targetId={targetId}
        targetType={targetType}
        showForm={showForm}
        setShowForm={setShowForm}
        showAvatar={true}
      />
    </div>
  );
};