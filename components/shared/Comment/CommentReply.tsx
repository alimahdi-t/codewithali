"use client";
import { useState } from "react";
import { CommentForm } from "@/components/forms/CommentForm";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface Props {
  targetId: number;
  targetType: "course" | "post";
  parentId: string;
}

export const CommentReply = ({ targetId, targetType, parentId }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const session = useSession();
  const handleOnClick = () => {
    if (session.status === "unauthenticated") {
      toast.warning("لطفا ابتدا وارد حساب خود شوید.");
      return;
    }
    setShowForm(!showForm);
  };
  return (
    <div>
      <button onClick={handleOnClick}>
        <p
          className="mt-2 text-xs font-normal cursor-pointer
           text-dark-400_light-600 hover:text-dark-900_light-25 transition-all duration-300"
        >
          پاسخ
        </p>
      </button>
      {showForm && (
        <CommentForm
          targetId={targetId}
          targetType={targetType}
          parentId={parentId}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};