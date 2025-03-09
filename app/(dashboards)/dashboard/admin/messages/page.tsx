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
import Pagination from "@/components/shared/Pagination";
import { getContactMessages } from "@/actions/getContactMessages.action";
import { toast } from "sonner";
import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";
import { GetContactMessages } from "@/actions/shared.types";

interface Props {
  searchParams: Promise<GetContactMessages>;
}

const MessagesPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const pageSize = 4;
  const response = await getContactMessages({
    page: searchParams.page,
    pageSize: pageSize,
    status: searchParams.status,
  });
  if (response.error) {
    toast.error(response.error);
    return null;
  }
  if (!response) {
    return;
  }

  const { messages, statusCountMap, totalMessages, filteredMessagesCount } =
    await response;

  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
        <StatisticsCard
          count={totalMessages ?? ""}
          label="همه پیام ها"
          variant="info"
        />
        <StatisticsCard
          count={statusCountMap?.PENDING ?? ""}
          label="پیام‌های در انتظار رسیدگی"
          variant="warning"
          status="PENDING"
        />
        <StatisticsCard
          count={statusCountMap?.IN_PROGRESS ?? ""}
          label="پیام‌های در حال بررسی"
          variant="success"
          status="IN_PROGRESS"
        />
        <StatisticsCard
          count={statusCountMap?.RESOLVED ?? ""}
          label="پیام‌های بسته ‌شده"
          variant="error"
          status="RESOLVED"
        />
      </div>
      <div className="mt-12">
        <Table>
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
            {messages?.map((message, index) => (
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
        <div>
          <Pagination
            pageSize={pageSize}
            itemCount={filteredMessagesCount ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;