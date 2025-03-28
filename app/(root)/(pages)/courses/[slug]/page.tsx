import { getCourseBySlug } from "@/actions/courses/get-course-by-slug.action";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReadOnly from "@/components/RichTextEditor/ReadOnly";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InstructorInfo from "@/app/(root)/(pages)/courses/[slug]/InstructorInfo";
import { CourseHeader } from "@/app/(root)/(pages)/courses/[slug]/_components/Header/CourseHeader";

interface Props {
  params: Promise<{ slug: string }>;
}

const CoursePage = async (props: Props) => {
  const params = await props.params;
  const course = await getCourseBySlug({ slug: params.slug });
  if (!course) {
    notFound();
  }

  const { instructor, price, imageUrl, description, content, title } = course;

  return (
    <div className="w-full flex flex-col gap-8">
      <CourseHeader
        title={title}
        description={description}
        imageUrl={imageUrl}
        price={price}
      />
      <div className="w-full flex flex-row gap-4 flex-1 pb-12">
        <div className="flex flex-col gap-4">
          <Card className="flex-1">
            <CardContent>
              <Image src={imageUrl} width={1200} height={1200} alt={""} />
              <div className="px-2 py-6 leading-7 text-justify">
                <ReadOnly content={content} />
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
              <CardTitle>{title}</CardTitle>
            </CardHeader>
          </Card>
          <InstructorInfo instructor={instructor} />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;