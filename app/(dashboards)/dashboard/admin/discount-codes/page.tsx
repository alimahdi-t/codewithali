import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";

import { DiscountTable } from "@/app/(dashboards)/dashboard/admin/discount-codes/DiscountTable";

const DiscountCodesPage = () => {
  return (
    <div className="rounded-xl p-4 bg-white shadow-sm">
      <DashboardPageHeader
        title="لیست کدهای تخفیف"
        description="لیست تمام کدهای تخفیف، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
        buttonHref={""}
      />

      <div className="mt-12">
        <DiscountTable />
        {/*<Table>*/}
        {/*  <TableHeader className="align-middle">*/}
        {/*    <TableRow className="text-start">*/}
        {/*      <TableHead className="w-24 text-start">*/}
        {/*        <Checkbox />*/}
        {/*      </TableHead>*/}
        {/*      <TableHead className="w-24 text-start">ردیف</TableHead>*/}
        {/*      <TableHead className="text-start">عنوان دوره</TableHead>*/}
        {/*      <TableHead className="text-start">ایمیل</TableHead>*/}
        {/*      <TableHead className="text-start">وضعیت</TableHead>*/}
        {/*      <TableHead className="text-start">تاریخ</TableHead>*/}
        {/*      <TableHead className="text-start">عملیات</TableHead>*/}
        {/*    </TableRow>*/}
        {/*  </TableHeader>*/}
        {/*  <TableBody className="text[#5A6A85]">*/}
        {/*    /!*{messages?.map((message, index) => (*!/*/}
        {/*    /!*  <TableRow key={index} className="h-[72px] text[#5A6A85] text-sm">*!/*/}
        {/*    /!*    <TableCell className="text-xs font-normal">*!/*/}
        {/*    /!*      {convertToPersianNumbers(index + 1)}*!/*/}
        {/*    /!*    </TableCell>*!/*/}
        {/*    /!*    <TableCell>{message.title}</TableCell>*!/*/}
        {/*    /!*    <TableCell className="font-sans text-gray-600">*!/*/}
        {/*    /!*      {message.email}*!/*/}
        {/*    /!*    </TableCell>*!/*/}
        {/*    /!*    <TableCell>*!/*/}
        {/*    /!*      <MessageStatus status={message.status} />*!/*/}
        {/*    /!*    </TableCell>*!/*/}
        {/*    /!*    <TableCell className="text-gray-500">*!/*/}
        {/*    /!*      {convertToPersianNumbers(*!/*/}
        {/*    /!*        moment(message.createdAt).locale("fa").format("YYYY/MM/DD"),*!/*/}
        {/*    /!*      )}*!/*/}
        {/*    /!*    </TableCell>*!/*/}
        {/*    /!*    <TableCell>*!/*/}
        {/*    /!*      <MessageActions message={message} />*!/*/}
        {/*    /!*    </TableCell>*!/*/}
        {/*    /!*  </TableRow>*!/*/}
        {/*    /!*))}*!/*/}
        {/*  </TableBody>*/}
        {/*</Table>*/}
      </div>
    </div>
  );
};

export default DiscountCodesPage;