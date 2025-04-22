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
import { convertToPersianNumbers } from "@/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
}

export function GenericTable<T extends { id: string | number }>({
  columns,
  data,
  emptyText,
  bulkActions,
}: GenericTableProps<T>) {
  const allKeys = columns.map((col) => col.key.toString());
  const [visibleKeys, setVisibleKeys] = useState(allKeys);

  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  // Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
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
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
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
      <div
        className={cn(
          "transition-all duration-400 ease-in-out overflow-hidden",
          selectedRows.length > 0
            ? "max-h-min opacity-100 mt-3"
            : "max-h-0 opacity-0",
        )}
      >
        <div className="flex justify-between items-center p-3 border rounded-md bg-muted text-muted-foreground text-sm">
          <span className="text-xs">
            {`${convertToPersianNumbers(
              selectedRows.length,
            )} از ${convertToPersianNumbers(data.length)} ردیف انتخاب شده.`}
          </span>
          {bulkActions?.(selectedRows)}
        </div>
      </div>
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
            {data.length === 0 ? (
              <TableRow className="h-[72px] text-sm">
                <TableCell colSpan={visibleColumns.length + 1}>
                  {emptyText || "داده‌ای وجود ندارد."}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, rowIndex) => (
                <TableRow key={rowIndex} className="h-[72px]  text-sm">
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
                        : String((item as any)[col.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mx-4 my-4">
          <div>
            <span className="text-xs">
              {`${convertToPersianNumbers(
                selectedRows.length,
              )} از ${convertToPersianNumbers(data.length)} ردیف انتخاب شده.`}
            </span>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-2 text-sm">
              <span>نمایش:</span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) => {
                  setCurrentPage(1); // reset to first page
                  setRowsPerPage(parseInt(value));
                }}
              >
                <SelectTrigger className="w-16 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10, 20, 50].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {convertToPersianNumbers(num)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span>ردیف در هر صفحه</span>
            </div>
            <div className="flex justify-between items-center py-3 text-sm space-x-4">
              <div className="w-24 text-center">
                صفحه {convertToPersianNumbers(currentPage)} از{" "}
                {convertToPersianNumbers(totalPages)}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
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