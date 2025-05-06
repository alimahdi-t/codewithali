import CreateDiscountCodeForm from "@/components/forms/CreateDiscountCodeForm";

export default function NewDiscountCodePage() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="font-bold text-xl mb-8">افزودن کد تخفیف</h2>
      <CreateDiscountCodeForm />
    </div>
  );
}