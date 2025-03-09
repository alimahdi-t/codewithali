"use client";
import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

interface ActionGroupProps {
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
}

export const ActionGroup = ({ onEdit, onView, onDelete }: ActionGroupProps) => {
  return (
    <span className="flex items-center gap-x-1">
      {/* Edit Action */}
      <span
        className="cursor-pointer text-action-success hover:text-white hover:bg-action-success p-2 rounded-full transition-all hover:scale-105 duration-200 flex items-center justify-center"
        onClick={onEdit}
      >
        <HiOutlinePencilSquare className="size-5" />
      </span>

      {/* View Action */}
      <span
        className="cursor-pointer text-action-info hover:text-white hover:bg-action-info p-2 rounded-full transition-all hover:scale-105 duration-200 flex items-center justify-center"
        onClick={onView}
      >
        <HiOutlineEye className="size-5" />
      </span>

      {/* Delete Action */}
      <span
        className="cursor-pointer text-action-error hover:text-white hover:bg-action-error p-2 rounded-full transition-all hover:scale-105 duration-200 flex items-center justify-center"
        onClick={onDelete}
      >
        <HiOutlineTrash className="size-5" />
      </span>
    </span>
  );
};