// "use client";
//
// import * as React from "react";
// import { cn } from "@/lib/utils";
//
// // ✅ Table Root Component
// const Table = ({
//   className,
//   children,
//   ...props
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <table
//       className={cn("min-w-full border-separate border-spacing-0", className)}
//       {...props}
//     >
//       {children}
//     </table>
//   );
// };
// Table.displayName = "Table";
//
// // ✅ Table Header
// const TableHeader = ({
//   className,
//   children,
//   ...props
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <thead className={cn("bg-gray-100", className)} {...props}>
//       {children}
//     </thead>
//   );
// };
// TableHeader.displayName = "TableHeader";
//
// const TableHead = ({
//   className,
//   children,
//   ...props
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <th
//       scope="col"
//       className={cn(
//         "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//     </th>
//   );
// };
// TableHead.displayName = "TableHead";
//
// // ✅ Table Body
// const TableBody = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   React.Children.forEach(children, (child) => {
//     if (React.isValidElement(child) && child.type !== TableRow) {
//       throw new Error("TableBody can only contain TableRow components.");
//     }
//   });
//
//   return <tbody className={cn("divide-y", className)}>{children}</tbody>;
// };
// TableBody.displayName = "TableBody";
//
// // ✅ Table Row (Only Accepts TableCell)
// const TableRow = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return <tr className={cn("border-b", className)}>{children}</tr>;
// };
// TableRow.displayName = "TableRow";
//
// // ✅ Table Cell
// const TableCell = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <td
//       className={cn(
//         "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8",
//         className,
//       )}
//     >
//       {children}
//     </td>
//   );
// };
// TableCell.displayName = "TableCell";
//
// // ✅ Table Caption
// const TableCaption = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <caption className={cn("text-gray-600 text-sm", className)}>
//       {children}
//     </caption>
//   );
// };
// TableCaption.displayName = "TableCaption";
//
// // ✅ Exporting Components
// export {
//   Table,
//   TableHeader,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableCaption,
//   TableHead,
// };
