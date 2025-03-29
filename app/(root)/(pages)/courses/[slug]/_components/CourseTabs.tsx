import Link from "next/link";

const courseTabsLinks = [
  { name: "توضیحات تکمیلی", href: "#" },
  { name: "سرفصل ها", href: "#" },
  { name: "سوالات متداول", href: "#" },
  { name: "جزئیات دوره", href: "#" },
  { name: "نظرات", href: "#" },
];

const CourseTabs = () => {
  return (
    // <div className="px-5 border border-black rounded-lg py-6 flex justify-center gap-12">
    <div className={"c-card flex-1 px-6 py-6 flex justify-center gap-12"}>
      {courseTabsLinks.map((item, index) => (
        <Link key={index} className="text-sm" href={item.href}>
          {item.name}
        </Link>
      ))}
      {/*// </div>*/}
    </div>
  );
};

export default CourseTabs;