"use client";
import { HiOutlineHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const pages = [
  { name: "دوره ها", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

export default function BreadCrump() {
  const path = usePathname();

  return (
    <nav>
      {path}
      <ol
        role="list"
        className="mx-auto flex w-full max-w-7xl space-x-4 px-4 sm:px-6 lg:px-8 bg-white shadow-lg gap-4"
      >
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-black hover:text-gray-500">
              <HiOutlineHome className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="sr-only">خانه</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center mx-4">
              <svg
                className="h-full w-6 shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
                strokeWidth={3}
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}