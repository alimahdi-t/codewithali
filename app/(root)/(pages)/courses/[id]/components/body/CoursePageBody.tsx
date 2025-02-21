import CourseMetrics from "@/app/(root)/(pages)/courses/[id]/components/CourseMetrics";
import CourseTabs from "@/app/(root)/(pages)/courses/[id]/components/CourseTabs";
import {
  HiAcademicCap,
  HiChatBubbleLeftRight,
  HiDocumentText,
} from "react-icons/hi2";
import { Accordion } from "@/components/ui/accordion";
import CourseContentHeader from "@/app/(root)/(pages)/courses/[id]/components/CourseContentHeader";

const CoursePageBody = () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-4 dark:bg-gray-950">
      <CourseMetrics />
      <CourseTabs />
      <div className="">
        <div className="flex items-center">
          {/*<span*/}
          {/*  className={`w-1.5 h-10 rounded-r-sm relative left-6 bg-yellow-500`}*/}
          {/*></span>*/}
          {/* Render the icon component */}
          <span className="p-4 bg-yellow-500/10 rounded-full">
            <HiDocumentText className="w-8 h-8 text-yellow-500" />
          </span>
          <h3 className="text-2xl font-semibold mx-2">توضیحات</h3>
        </div>
      </div>

      <div>
        <div className="flex flex-1 items-center">
          {/*<div*/}
          {/*  className={`w-1.5 h-10 rounded-r-sm relative left-6 bg-brand-500`}*/}
          {/*/>*/}
          {/* Render the icon component */}
          <span className="p-4 bg-brand-500/10 rounded-full">
            <HiAcademicCap className="w-8 h-8 text-brand-500" />
          </span>
          <h3 className="text-2xl font-semibold mx-2">سرفصل‌های دوره</h3>
        </div>
        <div className="px-2 my-4">
          <Accordion type="single" collapsible className="border rounded-lg">
            <CourseContentHeader
              numberOfLessons={106}
              numberOfVideos={38}
              numberOfHomeworks={49}
            />

            {/*{CourseTopics.map((courseTopic, index) => (*/}
            {/*  <AccordionItem*/}
            {/*    key={index}*/}
            {/*    value={`item-${index}`}*/}
            {/*    className="px-4 py-2"*/}
            {/*  >*/}
            {/*    <AccordionTrigger>*/}
            {/*      <div className="w-full flex justify-between items-center px-2 border-gray-100">*/}
            {/*        <h4>{courseTopic.label}</h4>*/}
            {/*        <LessonDetails*/}
            {/*          numberOfLessons={5}*/}
            {/*          numberOfHomeworks={4}*/}
            {/*          numberOfVideos={4}*/}
            {/*        />*/}
            {/*      </div>*/}
            {/*    </AccordionTrigger>*/}
            {/*    <AccordionContent>*/}
            {/*      Yes. It adheres to the WAI-ARIA design pattern.*/}
            {/*    </AccordionContent>*/}
            {/*  </AccordionItem>*/}
            {/*))}*/}
          </Accordion>
        </div>
      </div>
      <div className="box-t">
        <div className="flex items-center gap-x-2">
          <span
            className={`w-1.5 h-10 rounded-r-sm relative left-6 bg-red-500`}
          ></span>
          {/* Render the icon component */}
          <HiChatBubbleLeftRight className="w-10 h-10 text-red-500" />
          <h3 className="text-2xl font-semibold">نظرات</h3>
        </div>
      </div>
    </div>
  );
};

export default CoursePageBody;
