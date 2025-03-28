import {
  HiOutlineBookOpen,
  HiOutlineCodeBracket,
  HiOutlinePlayCircle,
} from "react-icons/hi2";
import { convertToPersianNumbers } from "@/utils";

interface Props {
  numberOfLessons?: number;
  numberOfVideos?: number;
  numberOfHomeworks?: number;
}

const CourseContentHeader = ({
  numberOfLessons,
  numberOfHomeworks,
  numberOfVideos,
}: Props) => {
  return (
    <div className="flex justify-center items-center text-xs gap-2 font-semibold text-gray-800 py-4 border-b text-center">
      {numberOfLessons && (
        <div className="flex items-center gap-1 after:w-2 after:h-2 after:rounded-full after:bg-gray-200">
          <HiOutlineBookOpen className="w-4 h-4" />
          <p>{`${convertToPersianNumbers(numberOfLessons)} درسنامه`}</p>
        </div>
      )}

      {numberOfVideos && (
        <div className="flex items-center gap-1 after:w-2 after:h-2 after:rounded-full after:bg-gray-200">
          <HiOutlinePlayCircle className="w-4 h-4" />
          <p>{`${convertToPersianNumbers(numberOfVideos)} ویدیو`}</p>
        </div>
      )}

      {numberOfHomeworks && (
        <div className="flex items-center gap-1">
          <HiOutlineCodeBracket className="w-4 h-4" />
          <p>{`${convertToPersianNumbers(numberOfHomeworks)} تمرین`}</p>
        </div>
      )}
    </div>
  );
};

export default CourseContentHeader;