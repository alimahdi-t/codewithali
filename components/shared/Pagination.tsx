"use client";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { convertToPersianAndFormat } from "@/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const router = useRouter();
  const searchParams = useSearchParams();

  if (pageCount <= 1) return null;

  const pageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  const renderPageNumbers = () => {
    const pagesToShow = [];

    if (currentPage !== 1) {
      pagesToShow.push(
        <Button
          variant="ghost"
          className="w-4 h-4 p-4"
          onClick={() => pageChange(1)}
        >
          {convertToPersianAndFormat(1)}
        </Button>,
      );
    }

    if (currentPage - 2 > 2) {
      pagesToShow.push(
        <span
          key={1}
          variant="default"
          className={`w-4 h-4 p-4 flex justify-center items-center`}
        >
          ...
        </span>,
      );
    }

    if (currentPage > 3) {
      pagesToShow.push(
        <Button
          variant="ghost"
          className={`w-4 h-4 p-4`}
          onClick={() => pageChange(currentPage - 2)}
        >
          {convertToPersianAndFormat(currentPage - 2)}
        </Button>,
      );
    }

    if (currentPage > 2) {
      pagesToShow.push(
        <Button
          variant="ghost"
          className={`w-4 h-4 p-4`}
          onClick={() => pageChange(currentPage - 1)}
        >
          {convertToPersianAndFormat(currentPage - 1)}
        </Button>,
      );
    }

    pagesToShow.push(
      <Button
        variant="default"
        className={`w-4 h-4 p-4`}
        onClick={() => pageChange(currentPage)}
      >
        {convertToPersianAndFormat(currentPage)}
      </Button>,
    );

    if (currentPage < pageCount - 1) {
      pagesToShow.push(
        <Button
          variant="ghost"
          className={`w-4 h-4 p-4`}
          onClick={() => pageChange(currentPage + 1)}
        >
          {convertToPersianAndFormat(currentPage + 1)}
        </Button>,
      );
    }

    if (currentPage < pageCount - 2) {
      pagesToShow.push(
        <Button
          variant="ghost"
          className={`w-4 h-4 p-4`}
          onClick={() => pageChange(currentPage + 2)}
        >
          {convertToPersianAndFormat(currentPage + 2)}
        </Button>,
      );
    }

    if (currentPage + 2 < pageCount - 1) {
      pagesToShow.push(
        <Button key={1} variant="ghost" className={`w-4 h-4 p-4`}>
          ...
        </Button>,
      );
    }

    if (currentPage !== pageCount) {
      pagesToShow.push(
        <Button
          variant="ghost"
          className="w-4 h-4 p-4"
          onClick={() => pageChange(pageCount)}
        >
          {convertToPersianAndFormat(pageCount)}
        </Button>,
      );
    }
    return pagesToShow;
  };

  return (
    <div
      role="navigation"
      aria-label="pagination"
      className="w-full bg-white shadow-lg rounded-lg flex items-center gap-2 justify-center mt-4 select-none"
    >
      <Button
        variant="ghost"
        className="p-0 flex items-center justify-center"
        disabled={currentPage === 1}
        onClick={() => pageChange(currentPage - 1)}
      >
        <HiMiniChevronRight className="h-4 w-4 m-2" />
      </Button>

      {renderPageNumbers()}
      <Button
        variant="ghost"
        className="p-0 flex items-center justify-center"
        disabled={currentPage === pageCount}
        onClick={() => pageChange(currentPage + 1)}
      >
        <HiMiniChevronLeft className="h-4 w-4 m-2" />
      </Button>
    </div>
  );
};

export default Pagination;
