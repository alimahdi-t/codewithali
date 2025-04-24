"use client";

import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { convertToPersianAndFormat } from "@/utils";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  itemCount: number; // Total number of items (filtered messages count)
  pageSize: number; // Number of items per page
}

const PaginationItem = ({
  page,
  onClick,
  isActive,
}: {
  page: number | string;
  onClick?: () => void;
  isActive?: boolean;
}) => (
  <Button
    variant={isActive ? "default" : "ghost"}
    className="w-8 h-8 text-xs font-normal rounded-full p-0"
    onClick={typeof page === "number" ? onClick : undefined}
    disabled={typeof page !== "number"}
  >
    {typeof page === "number" ? convertToPersianAndFormat(page) : page}
  </Button>
);

const Pagination = ({ itemCount, pageSize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calculate total pages, ensuring at least 1 page
  const pageCount = Math.max(1, Math.ceil(itemCount / pageSize));

  // Get current page from URL or default to 1
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const page = Number(searchParams.get("page")) || 1;
    return page > pageCount ? pageCount : Math.max(1, page);
  });

  useEffect(() => {
    // Ensure the current page is within valid range
    if (currentPage > pageCount) {
      setCurrentPage(pageCount);
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", pageCount.toString());
      router.replace("?" + params.toString());
    } else if (currentPage < 1) {
      setCurrentPage(1);
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.replace("?" + params.toString());
    }
  }, [pageCount, currentPage, searchParams, router]); // Remove unnecessary dependencies

  // Don't show pagination if there's only one page or no data
  if (itemCount === 0 || pageCount <= 1) return null;

  const pageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  const renderPageNumbers = () => {
    const pagesToShow = [];

    if (currentPage > 1) {
      pagesToShow.push(
        <PaginationItem key="first" page={1} onClick={() => pageChange(1)} />,
      );
    }

    if (currentPage > 3) {
      pagesToShow.push(<PaginationItem key="dots-left" page="..." />);
    }

    if (currentPage > 2) {
      pagesToShow.push(
        <PaginationItem
          key={currentPage - 1}
          page={currentPage - 1}
          onClick={() => pageChange(currentPage - 1)}
        />,
      );
    }

    pagesToShow.push(
      <PaginationItem key="current" page={currentPage} isActive />,
    );

    if (currentPage < pageCount - 1) {
      pagesToShow.push(
        <PaginationItem
          key={currentPage + 1}
          page={currentPage + 1}
          onClick={() => pageChange(currentPage + 1)}
        />,
      );
    }

    if (currentPage < pageCount - 2) {
      pagesToShow.push(
        <PaginationItem
          key={currentPage + 2}
          page={currentPage + 2}
          onClick={() => pageChange(currentPage + 2)}
        />,
      );
    }

    if (currentPage < pageCount - 3) {
      pagesToShow.push(<PaginationItem key="dots-right" page="..." />);
    }

    if (currentPage !== pageCount) {
      pagesToShow.push(
        <PaginationItem
          key="last"
          page={pageCount}
          onClick={() => pageChange(pageCount)}
        />,
      );
    }

    return pagesToShow;
  };

  return (
    <div
      role="navigation"
      aria-label="pagination"
      className="w-full flex items-center gap-2 justify-center mt-4 select-none"
    >
      <Button
        variant="ghost"
        className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
        disabled={currentPage === 1}
        onClick={() => pageChange(currentPage - 1)}
      >
        <HiMiniChevronRight className="h-4 w-4 m-2" />
      </Button>

      {renderPageNumbers()}

      <Button
        variant="ghost"
        className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
        disabled={currentPage === pageCount}
        onClick={() => pageChange(currentPage + 1)}
      >
        <HiMiniChevronLeft className="h-4 w-4 m-2" />
      </Button>
    </div>
  );
};

export default Pagination;