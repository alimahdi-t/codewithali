import { getCourseBySlug } from "@/actions/getCourseBySlug.action";
import { notFound } from "next/navigation";

const CourseTopics = [
  {
    label: "مقدمه",
    lesson: 7,
    homework: 4,
    hours: (Math.random() * 2 + 1).toFixed(1),
  },
  {
    label: "متغیر و انواع داده",
    lesson: 19,
    homework: 7,
    hours: (Math.random() * 3 + 1).toFixed(1),
  },
  {
    label: "توابع آماده",
    lesson: 9,
    homework: 4,
    hours: (Math.random() * 2 + 1).toFixed(1),
  },
  {
    label: "پالت‌ها",
    lesson: 12,
    homework: 4,
    hours: (Math.random() * 2 + 1).toFixed(1),
  },
  {
    label: "وکتور و ماتریس",
    lesson: 8,
    homework: 8,
    hours: (Math.random() * 3 + 1).toFixed(1),
  },
  {
    label: "شرط",
    lesson: 7,
    homework: 4,
    hours: (Math.random() * 2 + 1).toFixed(1),
  },
  {
    label: "حلقه",
    lesson: 9,
    homework: 7,
    hours: (Math.random() * 3 + 1).toFixed(1),
  },
  {
    label: "تابع",
    lesson: 11,
    homework: 5,
    hours: (Math.random() * 3 + 1).toFixed(1),
  },
  {
    label: "باک و دیباک",
    lesson: 4,
    homework: 3,
    hours: (Math.random() + 1).toFixed(1),
  },
  {
    label: "کار با فایل",
    lesson: 9,
    homework: 2,
    hours: (Math.random() * 2 + 1).toFixed(1),
  },
  {
    label: "ریاضیات مهندسی",
    lesson: 11,
    homework: 0,
    hours: (Math.random() * 3 + 1).toFixed(1),
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

const CoursePage = async (props: Props) => {
  const params = await props.params;
  const course = await getCourseBySlug({ slug: params.slug });
  if (!course) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-row gap-4 flex-1 pb-12">
        {course.title}
      </div>
    </div>
  );
};

export default CoursePage;

const Group = () => {
  return (
    <div className="flex gap-2 items-center justify-start bg-white px-6 py-8 rounded-lg shadow">
      دسته بندی
    </div>
  );
};