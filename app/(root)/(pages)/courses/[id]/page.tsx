import { getCourseById } from "@/lib/actions/course.action";

interface Props {
  params: { id: string };
}

const Course = async ({ params }: Props) => {
  const course = await getCourseById({ id: parseInt(params.id) });

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>Course {course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default Course;
