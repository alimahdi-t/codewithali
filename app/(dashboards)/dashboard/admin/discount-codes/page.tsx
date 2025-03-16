import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DiscountCodesPage = () => {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
        <StatisticsCard count={62} label="همه پیام ها" variant="info" />
        <StatisticsCard
          count={5}
          label="پیام‌های در انتظار رسیدگی"
          variant="warning"
          status="PENDING"
        />
        <StatisticsCard
          count={2}
          label="پیام‌های در حال بررسی"
          variant="success"
          status="IN_PROGRESS"
        />
        <StatisticsCard
          count={55}
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
              <TableHead className="text-start">عنوان دوره</TableHead>
              <TableHead className="text-start">ایمیل</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
              <TableHead className="text-start">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text[#5A6A85]">
            {/*{messages?.map((message, index) => (*/}
            {/*  <TableRow key={index} className="h-[72px] text[#5A6A85] text-sm">*/}
            {/*    <TableCell className="text-xs font-normal">*/}
            {/*      {convertToPersianNumbers(index + 1)}*/}
            {/*    </TableCell>*/}
            {/*    <TableCell>{message.title}</TableCell>*/}
            {/*    <TableCell className="font-sans text-gray-600">*/}
            {/*      {message.email}*/}
            {/*    </TableCell>*/}
            {/*    <TableCell>*/}
            {/*      <MessageStatus status={message.status} />*/}
            {/*    </TableCell>*/}
            {/*    <TableCell className="text-gray-500">*/}
            {/*      {convertToPersianNumbers(*/}
            {/*        moment(message.createdAt).locale("fa").format("YYYY/MM/DD"),*/}
            {/*      )}*/}
            {/*    </TableCell>*/}
            {/*    <TableCell>*/}
            {/*      <MessageActions message={message} />*/}
            {/*    </TableCell>*/}
            {/*  </TableRow>*/}
            {/*))}*/}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DiscountCodesPage;