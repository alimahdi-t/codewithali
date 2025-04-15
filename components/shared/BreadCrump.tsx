import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HiOutlineHome } from "react-icons/hi2";
import { ChevronLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  path: { label: string; href: string };
  parentPath: { label: string; href: string };
}

export const BreadCrumb = ({ path, parentPath }: Props) => {
  return (
    <div className="c-card mb-10 px-6 py-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/public" asChild>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <HiOutlineHome className="size-6" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>خانه</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronLeft />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href={parentPath.href}>
              {parentPath.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronLeft />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{path.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};