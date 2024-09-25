import { getCourseById } from "@/lib/actions/course.action";
import { convertToPersianAndFormat, convertToPersianNumbers } from "@/utils";
import { Button } from "@/components/ui/button";
import Offer from "@/components/Offer";
import InstructorInfo from "@/app/(root)/(pages)/courses/[id]/components/InstructorInfo";
import CompletionProgress from "@/app/(root)/(pages)/courses/[id]/components/CompletionProgress";
import Container from "@/app/(root)/(pages)/courses/[id]/components/Container";
import {
  HiDocumentText,
  HiChatBubbleLeftRight,
  HiAcademicCap,
} from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SideBar from "@/app/(root)/(pages)/courses/[id]/components/SideBar";
import St from "@/app/(root)/(pages)/courses/[id]/components/St";
import CourseContentHeader from "@/app/(root)/(pages)/courses/[id]/components/CourseContentHeader";
import LessonDetails from "@/app/(root)/(pages)/courses/[id]/components/LessonDetails";
interface Props {
  params: { id: string };
}

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

const Course = async ({ params }: Props) => {
  const course = await getCourseById({ id: parseInt(params.id) });

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col gap-8">
      <CoursePageHeader course={course} />
      <div className="w-full flex flex-row gap-4 flex-1 pb-12">
        <CoursePageBody />
        <SideBar />
      </div>
    </div>
  );
};

export default Course;

const CoursePageHeader = ({ course }: { course }) => {
  return (
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
  );
};

const CoursePageBody = () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-4">
      <Container>
        <div className="flex items-center">
          <span
            className={`w-1.5 h-10 rounded-r-sm relative left-6 bg-yellow-500`}
          ></span>
          {/* Render the icon component */}
          <HiDocumentText className="w-10 h-10 text-yellow-500" />
          <h3 className="text-2xl font-semibold mx-2">توضیحات</h3>
        </div>
      </Container>

      <Container>
        <div className="flex flex-1 items-center">
          <div
            className={`w-1.5 h-10 rounded-r-sm relative left-6 bg-brand-500`}
          />
          {/* Render the icon component */}
          <HiAcademicCap className="w-10 h-10 text-brand-500" />
          <h3 className="text-2xl font-semibold mx-2">سرفصل‌های دوره</h3>
        </div>
        <div className="px-2 my-4">
          <Accordion type="single" collapsible className="border rounded-lg">
            <CourseContentHeader
              numberOfLessons={106}
              numberOfVideos={38}
              numberOfHomeworks={49}
            />

            {CourseTopics.map((courseTopic, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-4 py-2"
              >
                <AccordionTrigger>
                  <div className="w-full flex justify-between items-center px-2 border-gray-100">
                    <h4>{courseTopic.label}</h4>
                    <LessonDetails
                      numberOfLessons={5}
                      numberOfHomeworks={4}
                      numberOfVideos={4}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      <Container>
        <div className="flex items-center gap-x-2">
          <span
            className={`w-1.5 h-10 rounded-r-sm relative left-6 bg-red-500`}
          ></span>
          {/* Render the icon component */}
          <HiChatBubbleLeftRight className="w-10 h-10 text-red-500" />
          <h3 className="text-2xl font-semibold">نظرات</h3>
        </div>
      </Container>
    </div>
  );
};

const Group = () => {
  return (
    <div className="flex gap-2 items-center justify-start bg-white px-6 py-8 rounded-lg shadow">
      دسته بندی
    </div>
  );
};
