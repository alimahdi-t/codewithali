import { convertToPersianNumbers } from "@/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "jalali-moment";
import { MessageStatus } from "@/app/(dashboards)/dashboard/admin/messages/MessageStatus";
import { ActionGroup } from "@/app/(dashboards)/dashboard/admin/messages/ActionGroup";
import prisma from "@/lib/prisma";
import Pagination from "@/components/shared/Pagination";

const MessagesPage = async () => {
  const messages = await prisma.contactMessage.findMany();

  if (!messages) {
    return null;
  }

  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
        <div className="text-action-info bg-action-light-info c-stat-card c-scale-animation">
          <h3 className="font-bold text-2xl leading-7">
            {convertToPersianNumbers(8)}
          </h3>
          <p className="text-base font-medium ">همه پیام ها</p>
        </div>
        <div className="text-action-warning bg-action-light-warning c-stat-card c-scale-animation">
          <h3 className="font-bold text-2xl leading-7">
            {convertToPersianNumbers(8)}
          </h3>
          <p className="text-base font-medium ">پیام‌های در انتظار رسیدگی</p>
        </div>
        <div className="text-action-success bg-action-light-success c-stat-card c-scale-animation">
          <h3 className="font-bold text-2xl leading-7">
            {convertToPersianNumbers(8)}
          </h3>
          <p className="text-base font-medium ">پیام‌های در حال بررسی</p>
        </div>
        <div className="text-action-error bg-action-light-error c-stat-card c-scale-animation">
          <h3 className="font-bold text-2xl leading-7">
            {convertToPersianNumbers(8)}
          </h3>
          <p className="text-base font-medium ">پیام‌های بسته ‌شده</p>
        </div>
      </div>
      <div className="mt-12">
        <Table>
          {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
          <TableHeader className="align-middle">
            <TableRow className="text-start">
              <TableHead className="w-24 text-start">ردیف</TableHead>
              <TableHead className="text-start">عنوان</TableHead>
              <TableHead className="text-start">ایمیل</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
              <TableHead className="text-start">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text[#5A6A85]">
            {messages.map((message, index) => (
              <TableRow key={index} className="h-[72px] text[#5A6A85] text-sm">
                <TableCell>{convertToPersianNumbers(index)}</TableCell>
                <TableCell>{message.title}</TableCell>
                <TableCell className="font-sans text-gray-600">
                  {message.email}
                </TableCell>
                <TableCell>
                  <MessageStatus status={message.status} />
                </TableCell>
                <TableCell className="text-gray-500">
                  {convertToPersianNumbers(
                    moment(message.createdAt).locale("fa").format("YYYY/MM/DD"),
                  )}
                </TableCell>
                <TableCell>
                  <ActionGroup />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination currentPage={1} pageSize={4} itemCount={20} />
      </div>
    </div>
  );
};

export default MessagesPage;