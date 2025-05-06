import CreateDiscountCodeForm from "@/components/forms/CreateDiscountCodeForm";
import { getCourseNames } from "@/actions/discount-codes/get-course-names.action";
import { toast } from "sonner";

export default async function NewDiscountCodePage() {
  const response = await getCourseNames();
  if (response.error) {
    toast.error(response.error);
    return null;
  }
  const { data } = response;
  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="font-bold text-xl mb-8">افزودن کد تخفیف</h2>
      <CreateDiscountCodeForm courses={data ?? []} />
    </div>
  );
}