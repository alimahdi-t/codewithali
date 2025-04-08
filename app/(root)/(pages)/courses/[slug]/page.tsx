import { getCourseBySlug } from "@/actions/courses/get-course-by-slug.action";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReadOnly from "@/components/RichTextEditor/ReadOnly";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import InstructorInfo from "@/app/(root)/(pages)/courses/[slug]/_components/InstructorInfo";
import { CourseHeader } from "@/app/(root)/(pages)/courses/[slug]/_components/Header/CourseHeader";
import CourseMetrics from "@/app/(root)/(pages)/courses/[slug]/_components/CourseMetrics";
import CompletionProgress from "@/app/(root)/(pages)/courses/[slug]/_components/CompletionProgress";
import CourseContentHeader from "@/app/(root)/(pages)/courses/[slug]/_components/CourseContentHeader";
import CourseTabs from "@/app/(root)/(pages)/courses/[slug]/_components/CourseTabs";
import { CourseCommentSection } from "@/app/(root)/(pages)/courses/[slug]/_components/CourseCommentSection";
import { AddComment } from "@/components/shared/Comment/AddComment";

interface Props {
  params: Promise<{ slug: string }>;
}

const CoursePage = async (props: Props) => {
  const params = await props.params;
  const course = await getCourseBySlug({ slug: params.slug });
  if (!course) {
    notFound();
  }

  const { id, instructor, price, imageUrl, description, content, title } =
    course;

  return (
    <div className="w-full flex flex-col gap-8">
      <CourseHeader
        id={id.toString()}
        title={title}
        description={description}
        imageUrl={imageUrl}
        price={price}
      />
      <div className="w-full flex flex-row gap-4 flex-1 pb-12 mt-12 relative">
        <div className="flex flex-col gap-4">
          <CourseTabs />
          <CourseMetrics />
          <Card id="additional-info" className="flex-1">
            <CardHeader>
              <h3 className="text-lg font-medium">توضیحات</h3>
            </CardHeader>
            <CardContent>
              <Image src={imageUrl} width={1200} height={1200} alt={""} />
              <div className="px-2 py-6 leading-7 text-justify">
                <ReadOnly content={content} />
              </div>
            </CardContent>
          </Card>

          <Card id="syllabus">
            <CardHeader>
              <h3 className="text-lg font-medium">سرفصل‌ها</h3>
            </CardHeader>
            {/*<LessonDetails*/}
            {/*  numberOfLessons={3}*/}
            {/*  numberOfHomeworks={5}*/}
            {/*  numberOfVideos={6}*/}
            {/*/>*/}
            <CardContent>
              <CourseContentHeader
                numberOfHomeworks={5}
                numberOfLessons={4}
                numberOfVideos={3}
              />
            </CardContent>
          </Card>

          <Card id="comments">
            <CardHeader>
              <AddComment targetId={course.id} targetType={"course"} />
              <CourseCommentSection courseId={course.id} />
            </CardHeader>
          </Card>
          <Card id="faq">
            <CardHeader>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">سوالات متداول</h3>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* TODO: this must be fixed while its above div scroll*/}
        <div className="w-[480px] flex flex-col gap-4 h-full sticky top-10">
          <CompletionProgress progress={100} />
          <InstructorInfo instructor={instructor} />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;