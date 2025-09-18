import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export const DashboardPageHeader = ({
  title,
  description,
  buttonLabel,
  buttonHref,
}: PageHeaderProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h1 className="text-2xl font-bold leading-6 text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <p className="mt-2 text-base text-gray-900 dark:text-gray-400">
          {description}
        </p>
      </div>
      {buttonLabel && buttonHref && (
        <Link href={buttonHref}>
          <Button variant="default" size="sm" className="text-sm font-normal">
            {buttonLabel}
          </Button>
        </Link>
      )}
    </div>
  );
};