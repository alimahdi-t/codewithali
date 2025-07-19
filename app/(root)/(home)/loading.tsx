import { SectionBlock } from "@/components/shared/SectionBlock";
import CourseCardLoading from "@/app/(root)/(pages)/courses/CourseCardLoading";

export default function LoadingHomePage() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="max-w-7xl mx-auto py-5">
      <SectionBlock
        title={"آخرین دورهای ما"}
        link={{ title: "مشاهده همه", href: "/courses" }}
      >
        {items.map((item) => (
          <CourseCardLoading key={item} />
        ))}
      </SectionBlock>
      )
      <SectionBlock
        title={"آخـــرین مقالات ما"}
        link={{ title: "مشاهده همه", href: "/blog" }}
      >
        {items.map((item) => (
          <CourseCardLoading key={item} />
        ))}
      </SectionBlock>
      )
      <SectionBlock title={"نقشه های راه برای شروع"}>
        {items.map((item) => (
          <CourseCardLoading key={item} />
        ))}
      </SectionBlock>
    </div>
  );
}