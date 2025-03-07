import { getCourseBySlug } from "@/actions/getCourseBySlug.action";
import { notFound } from "next/navigation";
import CourseForm from "@/components/forms/CourseForm";

interface Props {
  params: Promise<{ slug: string }>;
}

const EditCoursePage = async (props: Props) => {
  const params = await props.params;
  const course = await getCourseBySlug({ slug: params.slug });
  if (!course) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="font-bold text-xl mb-8">ویرایش دوره</h2>
      <CourseForm
        path={"/dashboard/admin/courses"}
        type={"edit"}
        role="admin"
        initialData={{
          id: course.id,
          slug: course.slug,
          description: course.description,
          content: course.content,
          imageUrl: course.imageUrl,
          title: course.title,
          level: course.level,
          price: course.price.toString(),
          status: course.status,
          instructorId: course.instructorId.toString(),
        }}
      />
    </div>
  );
};

export default EditCoursePage;