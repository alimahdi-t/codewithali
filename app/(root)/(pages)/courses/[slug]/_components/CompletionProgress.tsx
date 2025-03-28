import { convertToPersianNumbers } from "@/utils";

interface Props {
  progress: number;
}

const CompletionProgress = ({ progress }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-semibold text-sm">
          درصد تکمیل دوره
        </span>
        <span className="text-gray-700 font-semibold text-sm">
          {convertToPersianNumbers(`${progress}%`)}
        </span>
      </div>
      <div
        dir="ltr"
        className="w-full bg-brand-100 h-3 rounded-lg overflow-hidden"
      >
        <div
          className="bg-brand-500 h-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CompletionProgress;