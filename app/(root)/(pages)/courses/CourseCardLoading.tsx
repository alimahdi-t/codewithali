import { Skeleton } from "@/components/ui/skeleton";

const CourseCardLoading = ({ ...props }) => {
  return (
    <article
      {...props}
      className={`flex flex-col h-full items-start justify-between rounded-lg shadow-md
        bg-white `}
    >
      {/*--------------- Card Header ---------------*/}

      <div className="relative w-full">
        <Skeleton className="aspect-2/1 w-full rounded-lg bg-gray-400" />
      </div>

      {/*--------------- Card Body ---------------*/}
      <div className="w-full px-4 py-4 flex flex-col gap-2">
        {/*--------------- Card Tags ---------------*/}

        {/*--------------- Card Title and Description ---------------*/}
        <div className="group relative">
          <Skeleton className={"bg-gray-400 w-40 h-4 rounded"} />
          <div className="mt-6">
            <Skeleton className={"bg-gray-400 w-60 h-3 rounded my-2"} />
            <Skeleton className={"bg-gray-400 w-36 h-3 rounded my-2"} />
            <Skeleton className={"bg-gray-400 w-full h-3 rounded my-2"} />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-x-1 text-gray-400 hover:text-brand-700 cursor-pointer">
            <Skeleton className={"bg-gray-400 w-20 h-3 rounded"} />
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-yellow-500">
            <Skeleton className={"bg-gray-400 w-8 h-3 rounded"} />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="w-full text-gray-400 flex justify-between items-center text-xs">
            <div className="flex items-center gap-x-1 ">
              <Skeleton className="bg-gray-400 w-8 h-3 rounded" />
            </div>

            <Skeleton className="bg-gray-400 w-16 h-3 rounded" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCardLoading;