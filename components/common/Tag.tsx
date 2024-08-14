import Link from "next/link";

interface Props {
  tagName: string;
  href: string;
}

const Tag = ({ tagName, href }: Props) => {
  const dark =
    "dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-700/10";
  return (
    <Link
      href={href}
      className="dark:bg-brand-400/10 dark:text-brand-400 dark:hover:bg-brand-700/10
                 bg-brand-50 hover:bg-brand-100 text-brand-700
                 relative z-10 rounded-md px-2.5 py-1 font-medium transition duration-300"
    >
      {tagName}
    </Link>
  );
};

export default Tag;
