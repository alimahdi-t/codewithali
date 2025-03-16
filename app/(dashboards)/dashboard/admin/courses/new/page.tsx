import CourseForm from "@/components/forms/CourseForm";

const NewCoursePage = () => {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="font-bold text-xl mb-8">افزودن دوره</h2>
      <CourseForm path="/dashboard/admin/courses" type="new" role="admin" />
    </div>
  );
};

export default NewCoursePage;