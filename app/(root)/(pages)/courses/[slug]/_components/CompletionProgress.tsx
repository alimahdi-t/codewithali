import { convertToPersianNumbers } from "@/utils";

interface Props {
  progress: number;
}

const CompletionProgress = ({ progress }: Props) => {
  // Define progress bar color dynamically
  const getProgressColor = () => {
    if (progress < 40) return "bg-action-error";
    if (progress < 70) return "bg-action-warning";
    return "bg-action-success";
  };

  return (
    <div className="flex flex-col gap-4 c-card p-6 shadow-sm rounded-lg ">
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
        className="w-full bg-gray-200 h-3 rounded-lg overflow-hidden relative"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full ${getProgressColor()} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CompletionProgress;