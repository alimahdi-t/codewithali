"use client";

import { Prisma } from "@/prisma/client";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { ActionGroup } from "@/components/common/ActionGroup";
import { GenericTable } from "@/components/shared/Table/GenericTable";

import Link from "next/link";
import { CommentType } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentType";
import { CommentStatus } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentStatus";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import { HiTrash } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { deleteComments } from "@/actions/comments/delete-comments.action";
import { BeatLoader } from "react-spinners";

type CommentTypeProps = Prisma.CommentGetPayload<{
  include: {
    author: true;
    course: true;
    post: true;
    replies: true;
  };
}>;

export const CommentsTable = ({
  comments,
}: {
  comments: CommentTypeProps[];
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOnDelete = async (ids: string[]) => {
    setIsDeleting(true); // شروع حذف

    try {
      if (ids.length === 0) {
        toast.warning("لطفا تعدادی از نظرات رو انتخاب کنید.");
      }
      const response = await deleteComments({ ids });
      if (response.success) {
        toast.success(response.success);
      }
      if (response.error) {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("مشکلی پیش آمد. لطفاً دوباره امتحان کنید.");
    } finally {
      setIsDeleting(false); // حذف تموم شد
    }
  };

  const handleOnView = async () => {
    //   TODO
  };

  const columns = [
    {
      key: "content",
      header: "متن نظر",
      render: (commentItem: CommentTypeProps) => (
        <TruncatedTooltipText text={commentItem.content} />
      ),
    },

    {
      key: "author",
      header: "کاربر",
      render: (commentItem: CommentTypeProps) => (
        //   TODO: add link
        <Link href={"#"}>
          {commentItem.author.firstName.concat(
            " ",
            commentItem.author.lastName,
          )}
        </Link>
      ),
    },
    {
      key: "targetType",
      header: "نوع",
      render: (commentItem: CommentTypeProps) => (
        <CommentType
          type={commentItem.postId ? "post" : "course"}
          title={
            commentItem.courseId
              ? commentItem.course?.title
              : commentItem.post?.title
          }
          slug={
            commentItem.courseId
              ? commentItem.course?.slug
              : commentItem.post?.slug
          }
        />
      ),
    },
    {
      key: "commentStatus",
      header: "وضعیت",
      render: (commentItem: CommentTypeProps) => (
        <CommentStatus status={commentItem.status} id={commentItem.id} />
      ),
    },
    {
      key: "date",
      header: "تاریخ",
      render: (commentItem: CommentTypeProps) => (
        <span className="text-dark-400_light-300">
          <DateTooltip date={commentItem.createdAt} />
        </span>
      ),
    },

    {
      key: "actions",
      header: "عملیات",
      render: (commentItem: CommentTypeProps) => (
        <div className="flex gap-2">
          <ActionGroup
            deleteAlertProps={{}}
            onDelete={() => handleOnDelete([commentItem.id])}
            onView={handleOnView}
          />
        </div>
      ),
    },
  ];

  return (
    <GenericTable
      columns={columns}
      data={comments}
      bulkActions={(selectedIds) => (
        <div className="flex items-center flex-wrap">
          <div className="relative mt-6">
            <Button
              size="sm"
              className="flex items-center gap-x-1 w-min"
              variant="destructive"
              onClick={() => handleOnDelete(selectedIds.map(String))}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <BeatLoader color={"#fdede8"} size={8} />
              ) : (
                <>
                  <HiTrash className="w-4 h-4 relative bottom-0.5" />
                  <span>حذف نظرات</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    />
  );
};