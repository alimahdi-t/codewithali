import { SectionBlock } from "@/components/dashboard/SectionBlock";

export default function UserPaymentPage() {
  return (
    <>
      <SectionBlock
        title="تیکت های من"
        addButton={{ label: "ایجاد تیکت جدید", href: "#" }}
      />
    </>
  );
}