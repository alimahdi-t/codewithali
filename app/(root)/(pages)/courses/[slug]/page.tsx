import { getCourseBySlug } from "@/actions/courses/get-course-by-slug.action";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReadOnly from "@/components/RichTextEditor/ReadOnly";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InstructorInfo from "@/app/(root)/(pages)/courses/[slug]/InstructorInfo";
import { AddToCartButton } from "@/app/(root)/(pages)/courses/[slug]/AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}

const CoursePage = async (props: Props) => {
  const params = await props.params;
  const course = await getCourseBySlug({ slug: params.slug });
  if (!course) {
    notFound();
  }

  const { instructor } = course;

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 flex flex-col justify-between">
          <div>
            <h1 className="c-text-h3">{course.title}</h1>
            <p className="leading-7 mt-4 line-clamp-4 textjus">
              {course.description} {course.description} {course.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <AddToCartButton />
            <span>{course.price}</span>
          </div>
        </div>
        <div className="col-span-2 bg-yellow-300 overflow-hidden rounded-lg">
          <Image src={course.imageUrl} width={1200} height={1200} alt={""} />
        </div>
      </div>
      <div className="w-full flex flex-row gap-4 flex-1 pb-12">
        <div className="flex flex-col gap-4">
          <Card className="flex-1">
            <CardContent>
              <Image
                src={course.imageUrl}
                width={1200}
                height={1200}
                alt={""}
              />
              <div className="px-2 py-6 leading-7 text-justify">
                <ReadOnly content={course.content} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>نظرات</CardHeader>
          </Card>
        </div>

        {/* TODO: this must be fixed while its above div scroll*/}
        <div className="w-[480px] flex flex-col gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
          </Card>
          <InstructorInfo instructor={course.instructor} />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;