import React from "react";
import { default as NextLink } from "next/link";
import { cn } from "@/lib/utils";

const ILink = ({
  children,
  href,
  className,
  ...props
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <NextLink
      className={cn(
        className,
        "font-semibold text-gray-900 ap-text-main hover:text-primary duration-500",
      )}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default ILink;
