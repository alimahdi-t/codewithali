import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllDiscountCodes } from "@/actions/discount-codes/get-all-discount-codes.action";
import { DiscountCodesTable } from "@/app/(dashboards)/dashboard/admin/discount-codes/DiscountCodesTable";
import { toast } from "sonner";

const DiscountCodesPage = async () => {
  const response = await getAllDiscountCodes();
  // console.log(response);

  if (response.warning) {
    toast.warning(response.warning);
    return;
  }
  if (response.error) {
    toast.error(response.error);
    return;
  }

  const { data } = response;

  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <DashboardPageHeader
        title="لیست کدهای تخفیف"
        description="لیست تمام کدهای تخفیف، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
        buttonHref={""}
      />
      <Link href={"/dashboard/admin/discount-codes/new"}>
        <Button>ساخت کد تخفیف جدید</Button>
      </Link>
      <div className="mt-12">
        <DiscountCodesTable data={data ?? []} />
      </div>
    </div>
  );
};

export default DiscountCodesPage;