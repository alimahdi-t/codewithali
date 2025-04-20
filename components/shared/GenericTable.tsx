"use client";

import {
  Table,
  TableBody,
  TableCaption,
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
}

export function GenericTable<T extends { id: string | number }>({
  columns,
  data,
  emptyText,
}: GenericTableProps<T>) {
  const allKeys = columns.map((col) => col.key.toString());
  const [visibleKeys, setVisibleKeys] = useState(allKeys);

  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

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
    setSelectedRows(checked ? data.map((item) => item.id) : []);
  };

  return (
    <div className="space-y-4">
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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="size-12 text-start">
              <Checkbox
                checked={selectedRows.length === data.length && data.length > 0}
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
            <TableRow className="h-[72px] text-[#5A6A85] text-sm">
              <TableCell colSpan={visibleColumns.length + 1}>
                {emptyText || "داده‌ای وجود ندارد."}
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="size-12">
                  <Checkbox
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
        <TableCaption className="text-start select-none">
          <span className="text-xs">
            {convertToPersianNumbers(
              `انتخاب ${selectedRows.length} از ${data.length} ردیف.`,
            )}
          </span>
        </TableCaption>
      </Table>
    </div>
  );
}