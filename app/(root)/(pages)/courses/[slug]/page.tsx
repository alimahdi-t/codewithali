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
import { CommentSection } from "@/app/(root)/(pages)/courses/[slug]/_components/CommentSection";
import { AddComment } from "@/components/shared/Comment/AddComment";
import { BreadCrumb } from "@/components/shared/BreadCrump";
import { ShowMoreWrapper } from "@/components/shared/ShowMoreWrapper";

interface Props {
  params: Promise<{ slug: string }>;
}

const CoursePage = async (props: Props) => {
  const params = await props.params;
  const course = await getCourseBySlug({ slug: params.slug });
  if (!course) {
    notFound();
  }

  const {
    id,
    instructor,
    price,
    imageUrl,
    description,
    content,
    title,
    discount,
  } = course;

  return (
    <>
      <BreadCrumb
        path={{ label: title, href: "" }}
        parentPath={{ label: "دوره ها", href: "/courses" }}
      />
      <div className="w-full flex flex-col gap-8">
        <CourseHeader
          id={id.toString()}
          title={title}
          description={description}
          imageUrl={imageUrl}
          price={price}
          discount={discount}
        />
        <div className="w-full flex flex-row gap-4 flex-1 pb-12 mt-12 max-lg:flex-col">
          <div className="flex-1 flex flex-col gap-4">
            {/*<CourseTabs />*/}
            <CourseMetrics />
            <Card id="additional-info" className="flex-1">
              <CardHeader>
                <h3 className="text-lg font-medium">توضیحات</h3>
              </CardHeader>
              <ShowMoreWrapper>
                <CardContent>
                  <Image src={imageUrl} width={1200} height={1200} alt={""} />
                  <div className="px-2 py-6 leading-7 text-justify">
                    <ReadOnly content={content} />
                  </div>
                </CardContent>
              </ShowMoreWrapper>
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
                <CommentSection courseId={course.id} />
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
          <div className="w-[300px] max-lg:w-full flex flex-col gap-4 h-full sticky top-10">
            <CompletionProgress progress={100} />
            <InstructorInfo instructor={instructor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;