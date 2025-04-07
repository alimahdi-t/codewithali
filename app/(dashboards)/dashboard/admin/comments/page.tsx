import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";

const CommentsPage = () => {
  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
        <StatisticsCard count={15} label="همه نظرات" variant="info" />
        <StatisticsCard
          count={3}
          label="نظرات در انتظار تایید"
          variant="warning"
          status="PENDING"
        />
        <StatisticsCard
          count={2}
          label="نظرات تأیید شده"
          variant="success"
          status="IN_PROGRESS"
        />
        <StatisticsCard
          count={10}
          label="نظرات رد شده"
          variant="error"
          status="RESOLVED"
        />
      </div>
      <div className="mt-12">
        {/*{messages?.length === 0 ? (*/}
        {/*  <p className="text-base font-normal">پیامی یافت نشد!</p>*/}
        {/*) : (*/}
        {/*  <Table>*/}
        {/*    <TableHeader className="align-middle">*/}
        {/*      <TableRow className="text-start">*/}
        {/*        <TableHead className="w-24 text-start">ردیف</TableHead>*/}
        {/*        <TableHead className="text-start">عنوان</TableHead>*/}
        {/*        <TableHead className="text-start">ایمیل</TableHead>*/}
        {/*        <TableHead className="text-start">وضعیت</TableHead>*/}
        {/*        <TableHead className="text-start">تاریخ</TableHead>*/}
        {/*        <TableHead className="text-start">عملیات</TableHead>*/}
        {/*      </TableRow>*/}
        {/*    </TableHeader>*/}
        {/*    <TableBody className="text[#5A6A85]">*/}
        {/*      {messages?.map((message, index) => (*/}
        {/*        <TableRow*/}
        {/*          key={index}*/}
        {/*          className="h-[72px] text[#5A6A85] text-sm"*/}
        {/*        >*/}
        {/*          <TableCell className="text-xs font-normal">*/}
        {/*            {convertToPersianNumbers(index + 1)}*/}
        {/*          </TableCell>*/}
        {/*          <TableCell>{message.title}</TableCell>*/}
        {/*          <TableCell className="font-sans text-dark-400_light-600">*/}
        {/*            {message.email}*/}
        {/*          </TableCell>*/}
        {/*          <TableCell>*/}
        {/*            <MessageStatus status={message.status} />*/}
        {/*          </TableCell>*/}
        {/*          <TableCell className="text-dark-400_light-300">*/}
        {/*            {convertToPersianNumbers(*/}
        {/*              moment(message.createdAt)*/}
        {/*                .locale("fa")*/}
        {/*                .format("YYYY/MM/DD"),*/}
        {/*            )}*/}
        {/*          </TableCell>*/}
        {/*          <TableCell>*/}
        {/*            <MessageActions message={message} />*/}
        {/*          </TableCell>*/}
        {/*        </TableRow>*/}
        {/*      ))}*/}
        {/*    </TableBody>*/}
        {/*  </Table>*/}
        {/*)}*/}
        <div>
          {/*<Pagination*/}
          {/*  pageSize={pageSize}*/}
          {/*  itemCount={filteredMessagesCount ?? 0}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;