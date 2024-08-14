import Link from "next/link";

interface Props {
  tagName: string;
  href: string;
}

const Tag = ({ tagName, href }: Props) => {
  return (
    <Link
      href={href}
      className="dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-700/10
                   bg-blue-50 hover:bg-blue-100 text-blue-700
                   relative z-10 rounded-md px-2.5 py-1 font-medium transition duration-300"
    >
      {tagName}
    </Link>
  );
};

export default Tag;
