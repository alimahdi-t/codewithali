import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Price from "@/components/common/Price";

interface Props {
  courseName: string;
  instructorName: string;
  price: number;
}

const CourseTable = () => {
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            لیست دوره‌ها
          </h1>
          <p className="mt-2 text-xs  text-gray-900">
            لیست تمام دوره‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد
            صحفه آن دوره شوید.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button type="button">افزودن دوره</Button>
        </div>
      </div>

      {/*Table*/}
      <div className="mt-8 flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          <Table>
            <TableHeader>
              <TableRow className="font-semibold select-none">
                <TableCell></TableCell>
                <TableCell>دوره</TableCell>
                <TableCell>مدرس</TableCell>
                <TableCell>قیمت</TableCell>
                <TableCell>تعداد دانشجوها</TableCell>
                <TableCell>وضعیت دوره</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>۱</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>سید علی مهدی</TableCell>
                <TableCell>
                  <Price price={380000} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>۲</TableCell>
                <TableCell>Jane Doe</TableCell>
                <TableCell>jane@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
