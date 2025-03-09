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

// Pagination button component (for individual page numbers)
const PaginationItem = ({
  page,
  onClick,
  isActive,
}: {
  page: number | string; // Page number or "..." for ellipsis
  onClick?: () => void; // Click event handler for numbered pages
  isActive?: boolean; // If the current page is active
}) => (
  <Button
    variant={isActive ? "default" : "ghost"} // Highlight active page
    className="w-8 h-8 text-xs font-normal rounded-full p-0"
    onClick={typeof page === "number" ? onClick : undefined}
    disabled={typeof page !== "number"} // Disable ellipsis button
  >
    {typeof page === "number" ? convertToPersianAndFormat(page) : page}
  </Button>
);

const Pagination = ({ itemCount, pageSize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current page from URL or default to 1
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1,
  );

  // Calculate total number of pages
  const pageCount = Math.ceil(itemCount / pageSize);

  // Ensure current page is within valid range
  useEffect(() => {
    if (currentPage > pageCount) {
      setCurrentPage(pageCount);
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", pageCount.toString());
      router.replace("?" + params.toString()); // Update URL without adding to history
    } else if (currentPage < 1) {
      setCurrentPage(1);
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.replace("?" + params.toString());
    }
  }, [currentPage, pageCount, router, searchParams]);

  // If there's only one page, don't show pagination
  if (pageCount <= 1) return null;

  // Change page and update URL
  const pageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  // Generate pagination buttons
  const renderPageNumbers = () => {
    const pagesToShow = [];

    // First page button (if not on page 1)
    if (currentPage > 1) {
      pagesToShow.push(
        <PaginationItem key="first" page={1} onClick={() => pageChange(1)} />,
      );
    }

    // Left ellipsis (if skipping pages)
    if (currentPage > 3) {
      pagesToShow.push(<PaginationItem key="dots-left" page="..." />);
    }

    // Previous page button (if applicable)
    if (currentPage > 2) {
      pagesToShow.push(
        <PaginationItem
          key={currentPage - 1}
          page={currentPage - 1}
          onClick={() => pageChange(currentPage - 1)}
        />,
      );
    }

    // Current page (always active)
    pagesToShow.push(
      <PaginationItem key="current" page={currentPage} isActive />,
    );

    // Next page button (if applicable)
    if (currentPage < pageCount - 1) {
      pagesToShow.push(
        <PaginationItem
          key={currentPage + 1}
          page={currentPage + 1}
          onClick={() => pageChange(currentPage + 1)}
        />,
      );
    }

    // Second next page (if applicable)
    if (currentPage < pageCount - 2) {
      pagesToShow.push(
        <PaginationItem
          key={currentPage + 2}
          page={currentPage + 2}
          onClick={() => pageChange(currentPage + 2)}
        />,
      );
    }

    // Right ellipsis (if skipping pages)
    if (currentPage < pageCount - 3) {
      pagesToShow.push(<PaginationItem key="dots-right" page="..." />);
    }

    // Last page button (if not on the last page)
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
      {/* Previous page button */}
      <Button
        variant="ghost"
        className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
        disabled={currentPage === 1} // Disable on first page
        onClick={() => pageChange(currentPage - 1)}
      >
        <HiMiniChevronRight className="h-4 w-4 m-2" />
      </Button>

      {/* Render dynamic page numbers */}
      {renderPageNumbers()}

      {/* Next page button */}
      <Button
        variant="ghost"
        className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
        disabled={currentPage === pageCount} // Disable on last page
        onClick={() => pageChange(currentPage + 1)}
      >
        <HiMiniChevronLeft className="h-4 w-4 m-2" />
      </Button>
    </div>
  );
};

export default Pagination;