import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const CheckOutPageLoading = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="c-text-h3">ثبت سفارش</h2>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-4 max-lg:flex-wrap">
        <div className="md:col-span-8 col-span-1 flex flex-col gap-4">
          <Card className="flex">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center">
                  <Skeleton className="w-32 h-5 rounded-lg" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden space-y-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center">
                      <div className="flex-1 flex items-center space-x-2">
                        <Skeleton className="w-[120px] h-[60px] rounded" />

                        <div className="flex-1 flex items-center max-md:items-start justify-between gap-2 max-md:flex-col">
                          <Skeleton className="h-5w-60 rounded" />
                          <div className="flex flex-col md:items-end gap-1">
                            <Skeleton className="h-4.5 w-24 rounded" />
                            <Skeleton className="h-4.5 w-16 rounded" />
                            {/*Discount amount*/}
                          </div>
                        </div>
                      </div>
                      <Skeleton className="size-5 rounded-full mr-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-4 col-span-1 flex flex-col gap-4 sticky top-4 h-min">
          <Card className="flex flex-col gap-4">
            <CardHeader>
              <CardTitle>سفارش شما</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                <div className="flex items-center justify-between text-sm font-medium">
                  <Skeleton className="w-20 h-4.5 rounded-lg" />
                  <Skeleton className="w-40 h-4.5 rounded-lg" />
                </div>
                <div className="mt-4 flex items-center justify-between text-action-error">
                  <Skeleton className="w-20 h-4.5 rounded-lg" />
                  <Skeleton className="w-24 h-4.5 rounded-lg" />
                </div>

                <div className="mt-6 flex items-center justify-between text-sm font-medium">
                  <Skeleton className="w-20 h-4.5 rounded-lg" />
                  <Skeleton className="w-36 h-4.5 rounded-lg" />
                </div>
                <Skeleton className="w-full mt-8 h-10"></Skeleton>
                <div className="mt-2.5 space-y-1">
                  <Skeleton className="w-full h-3.5 rounded-lg" />
                  <Skeleton className="w-full h-3.5 rounded-lg" />
                </div>
              </div>
            </CardContent>
          </Card>
          {/*TODO: complete discount section*/}
          <Card>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="p-1">
                    <Skeleton className="w-40 h-4.5 rounded-lg" />
                  </AccordionTrigger>
                  <AccordionContent className="p-1">
                    <div className="flex gap-2 items-center mt-2">
                      <Input placeholder="کد تخفیف خود رو وارد کنید" />
                      <Button size="sm">ثبت</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPageLoading;