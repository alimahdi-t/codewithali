import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

export const ActionGroup = () => {
  return (
    <span className="flex items-center gap-x-1">
      <span className="cursor-pointer text-action-success hover:text-white hover:bg-action-success p-2 rounded-full transition-all hover:scale-105 duration-200  flex items-center justify-center">
        <HiOutlinePencilSquare className="size-5" />
      </span>
      <span className="cursor-pointer text-action-info hover:text-white hover:bg-action-info p-2 rounded-full transition-all hover:scale-105 duration-200  flex items-center justify-center">
        <HiOutlineEye className="size-5" />
      </span>
      <span className="cursor-pointer text-action-error hover:text-white hover:bg-action-error p-2 rounded-full transition-all hover:scale-105 duration-200  flex items-center justify-center">
        <HiOutlineTrash className="size-5" />
      </span>
    </span>
  );
};