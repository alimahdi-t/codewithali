import { getCourseById } from "@/lib/actions/course.action";
import { convertToPersianAndFormat, convertToPersianNumbers } from "@/utils";
import { Button } from "@/components/ui/button";
import Offer from "@/components/Offer";

interface Props {
  params: { id: string };
}

const Course = async ({ params }: Props) => {
  const course = await getCourseById({ id: parseInt(params.id) });

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="">
      <div className="w-full  grid grid-cols-1  md:grid-cols-2  rounded-lg">
        <div className="flex flex-col justify-between col-span-1 p-4">
          <div>
            <h1
              className="text-2xl font-bold flex items-center before:ml-2
           before:content-['']  before:h-10 before:rounded-full before:w-1 before:bg-brand-500"
            >
              {course.title}
            </h1>
            <p className="my-4 leading-7 text-base">{course.description}</p>
          </div>
          <Offer
            initialDay={1}
            initialHours={0}
            initialMinutes={0}
            initialSeconds={0}
          />
          <div className="flex items-center justify-between">
            <Button>افزودن به سبد خرید</Button>
            <div className="flex gap-4 items-center justify-end">
              <p className="text-base  line-through text-gray-400 leading-7">
                {convertToPersianAndFormat(course.price)}
              </p>
              <p className="text-2xl font-bold leading-7 line-clamp-4">
                {convertToPersianAndFormat(course.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-4">
          <img src={course.imageUrl} className="rounded-lg aspect-[16/9]" />
        </div>
      </div>
    </div>
  );
};

export default Course;
