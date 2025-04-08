"use client";
import { useState } from "react";
import { CommentForm } from "@/components/forms/CommentForm";

export const CommentReply = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        <p
          className="mt-2 text-xs font-normal cursor-pointer
           text-dark-400_light-600 hover:text-dark-900_light-25 transition-all duration-300"
        >
          پاسخ
        </p>
      </button>

      {showForm && (
        <CommentForm
          targetId={1}
          targetType={"course"}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};