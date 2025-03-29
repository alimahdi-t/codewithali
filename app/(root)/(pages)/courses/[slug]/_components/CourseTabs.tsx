import Link from "next/link";

const courseTabsLinks = [
  { name: "مشخصات دوره", href: "" },
  { name: "توضیحات تکمیلی", href: "#additional-info" },
  { name: "سرفصل ها", href: "#syllabus" },
  { name: "نظرات", href: "#comments" },
  { name: "سوالات متداول", href: "#faq" },
];

const CourseTabs = () => {
  return (
    // <div className="px-5 border border-black rounded-lg py-6 flex justify-center gap-12">
    <div
      className={
        "c-card flex-1 px-6 py-4 flex justify-center gap-12 sticky top-0 z-99"
      }
    >
      {courseTabsLinks.map((item, index) => (
        <Link key={index} className="text-sm font-normal" href={item.href}>
          {item.name}
        </Link>
      ))}
      {/*// </div>*/}
    </div>
  );
};

export default CourseTabs;