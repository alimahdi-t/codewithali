import { Button } from "@/components/ui/button";

const InstructorInfo = ({ name, bio, imageUrl }: { name; bio; imageUrl }) => {
  return (
    <div className="w-full bg-white px-6 py-8 rounded-lg shadow border border-gray-100 flex flex-col gap-8">
      <div className="flex gap-2 items-center justify-start ">
        <div className="bg-gray-400 rounded-full w-16 h-16" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-400">مدرس دوره</p>
          <p className="text-xl font-bold leading-7">سید علی مهدی</p>
        </div>
      </div>
      {/*<p className="text-xs">برنامه نویس Full-Stack</p>*/}
      <Button
        variant="default"
        className="bg-white !py-6 rounded-full text-brand-500 border-2 border-brand-500 text-sm font-semibold
        hover:bg-brand-500 hover:text-white"
      >
        مشاهده پروفایل مدرس
      </Button>
    </div>
  );
};

export default InstructorInfo;
