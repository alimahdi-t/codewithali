import Image from "next/image";

export const ImageCard = ({ url }: { url: string }) => {
  return (
    <Image
      priority={true}
      width={400}
      height={200}
      src={url}
      alt=""
      className={`aspect-2/1 w-full bg-gray-100 dark:bg-slate-900 object-cover`}
    />
  );
};