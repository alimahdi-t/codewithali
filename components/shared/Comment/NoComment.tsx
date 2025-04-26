import Image from "next/image";

export const NoComment = ({ message }: { message?: string }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2">
      <Image
        src={"/images/webp/no-comment.webp"}
        width={120}
        height={120}
        alt={""}
        className="dark:opacity-50"
      />
      <p className="text-dark-700_light-300 text-sm font-normal">
        {message || "نظری پیدا نشد."}
      </p>
    </div>
  );
};