"use client";
import { Button } from "@/components/ui/button";
import { CommentForm } from "@/components/forms/CommentForm";
import { useState } from "react";

interface Props {
  targetId: number;
  targetType: "course" | "post";
}

export const AddComment = ({ targetId, targetType }: Props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">نظرات</h3>
        <Button size="sm" onClick={() => setShowForm(true)}>
          ثبت نظر
        </Button>
      </div>
      <CommentForm
        targetId={targetId}
        targetType={targetType}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
};