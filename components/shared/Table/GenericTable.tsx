"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toPersianNumber } from "@/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface GenericTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyText?: string;
  bulkActions?: (selectedIds: (string | number)[]) => React.ReactNode;
  addButton?: { href: string; label: string };
  loading?: boolean; // NEW
}

// 🔹 Skeleton rows for loading state
function TableSkeleton({
  columnsCount,
  rowsCount = 5,
}: {
  columnsCount: number;
  rowsCount?: number;
}) {
  return (
    <>
      {Array.from({ length: rowsCount }).map((_, rowIndex) => (
        <TableRow key={rowIndex} className="h-[72px]">
          <TableCell className="size-12">
            <div className="h-4 w-4 rounded bg-muted animate-pulse mx-4" />
          </TableCell>
          {Array.from({ length: columnsCount }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <div className="h-4 w-24 rounded bg-muted animate-pulse" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

export function GenericTable<T extends { id: string | number }>({
  columns,
  data,
  emptyText,
  bulkActions,
  addButton,
  loading = false,
}: GenericTableProps<T>) {
  const allKeys = columns.map((col) => col.key.toString());
  const [visibleKeys, setVisibleKeys] = useState(allKeys);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  // Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / rowsPerPage));
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const toggleColumn = (key: string) => {
    setVisibleKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const toggleAllColumns = (checked: boolean) => {
    setVisibleKeys(checked ? allKeys : []);
  };

  const visibleColumns = columns.filter((col) =>
    visibleKeys.includes(col.key.toString()),
  );

  const toggleRowSelection = (id: string | number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const toggleAllRows = (checked: boolean) => {
    const pageRowIds = paginatedData.map((item) => item.id);
    setSelectedRows((prev) =>
      checked
        ? Array.from(new Set([...prev, ...pageRowIds]))
        : prev.filter((id) => !pageRowIds.includes(id)),
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-x-2 items-center">
        {/* Column toggle menu */}
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto cursor-pointer">
              ستون‌ها
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={visibleKeys.length === allKeys.length}
              onCheckedChange={toggleAllColumns}
              className="font-bold"
            >
              نمایش همه
            </DropdownMenuCheckboxItem>
            {columns.map((column, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                className="capitalize"
                checked={visibleKeys.includes(column.key.toString())}
                onCheckedChange={() => toggleColumn(column.key.toString())}
              >
                {column.header}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Add button */}
        {addButton && (
          <Link href={addButton.href}>
            <Button variant="default" size="sm" className="text-sm font-normal">
              <Plus className="size-4.5 relative mb-0.5" />
              {addButton.label}
            </Button>
          </Link>
        )}
      </div>

      {/* Bulk actions */}
      {bulkActions && (
        <div
          className={cn(
            "transition-all duration-400 ease-in-out overflow-hidden",
            selectedRows.length > 0
              ? "max-h-min opacity-100 mt-3"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="flex justify-between items-center p-3 border rounded-md bg-muted text-muted-foreground text-sm">
            {bulkActions?.(selectedRows)}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="size-12 text-start">
                <Checkbox
                  className="mx-4"
                  checked={
                    paginatedData.length > 0 &&
                    paginatedData.every((item) =>
                      selectedRows.includes(item.id),
                    )
                  }
                  onCheckedChange={toggleAllRows}
                />
              </TableHead>
              {visibleColumns.map((col, i) => (
                <TableHead key={i} className={cn("text-start", col.className)}>
                  {col.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableSkeleton
                columnsCount={visibleColumns.length}
                rowsCount={rowsPerPage}
              />
            ) : data.length === 0 ? (
              <TableRow className="h-[72px] text-sm">
                <TableCell colSpan={visibleColumns.length + 1}>
                  {emptyText || "داده‌ای وجود ندارد."}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, rowIndex) => (
                <TableRow key={rowIndex} className="h-[72px] text-sm">
                  <TableCell className="size-12">
                    <Checkbox
                      className="mx-4"
                      checked={selectedRows.includes(item.id)}
                      onCheckedChange={() => toggleRowSelection(item.id)}
                    />
                  </TableCell>
                  {visibleColumns.map((col, colIndex) => (
                    <TableCell key={colIndex} className={col.className}>
                      {col.render
                        ? col.render(item)
                        : String(item[col.key as keyof T])}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between mx-4 my-4">
          <div>
            <span className="text-xs">
              {`${toPersianNumber(selectedRows.length)} از ${toPersianNumber(
                data.length,
              )} ردیف انتخاب شده.`}
            </span>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-2 text-sm">
              <span>نمایش:</span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) => {
                  setCurrentPage(1);
                  setRowsPerPage(parseInt(value));
                }}
              >
                <SelectTrigger className="w-16 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10, 20, 50].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {toPersianNumber(num)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span>ردیف در هر صفحه</span>
            </div>

            <div className="flex justify-between items-center py-3 text-sm space-x-4">
              <div className="w-24 text-center">
                صفحه {toPersianNumber(currentPage)} از{" "}
                {toPersianNumber(totalPages)}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                >
                  <ChevronsRight className="size-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs font-medium"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <ChevronRight className="size-4" />
                  قبلی
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs font-medium"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  بعدی
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  <ChevronsLeft className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}