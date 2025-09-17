import { Button } from "@/components/ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  title: string;
  addButton?: { label: string; href: string };
  children?: ReactNode;
}

export const SectionBlock = (props: Props) => {
  const { title, addButton, children } = props;
  return (
    <section className="bg-white p-5 sm:p-7 lg:rounded-lg h-full">
      <div className="">
        <div className="flex items-center justify-between flex-wrap gap-y-5 mb-8">
          <div className="flex items-center justify-between max-xs:w-full max-xs:flex-wrap">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <div className="flex gap-4 max-xs:w-full">
            <div className="flex gap-x-2.5 max-xs:w-full">
              <button
                role="combobox"
                type="button"
                aria-controls="reka-select-content-v-99"
                aria-expanded="false"
                aria-required="false"
                aria-autocomplete="none"
                // disabled=""
                dir="rtl"
                data-state="closed"
                data-disabled=""
                className="btn-sm btn-filled-gray max-xs:w-full xs:btn-only-icon"
              >
                <span
                  className="iconify i-linear:sort"
                  aria-hidden="true"
                  // style="font-size: 1rem;"
                ></span>
                <span className="absolute opacity-0 -top-0.5 -right-0.5 block size-2 bg-brand rounded-full transition-all"></span>
              </button>
            </div>
            {addButton && (
              <Link href={addButton.href}>
                <Button
                  className="space-x-1 text-sm font-normal"
                  variant="default"
                >
                  <HiOutlinePlus className="size-5 relative mb-1" />
                  <span>{addButton.label}</span>
                </Button>
              </Link>
            )}
            <a
              href="/tickets/create"
              className="max-xs:!hidden btn-sm btn-filled-brand"
            >
              <span
                className="iconify i-linear:add"
                aria-hidden="true"
                // style="font-size: 1rem;"
              ></span>{" "}
            </a>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center gap-5 sm:gap-7 py-6 sm:py-8">
      <Image
        src="/images/dashboard/tickets-empty.png"
        className="size-16 sm:size-25"
        width={100}
        height={100}
        alt={""}
      />
      <div className="flex flex-col items-center text-center">
        <span className="text-caption sm:text-body font-bold">
          تاکنون هیچ تیکتی ثبت نکردی!
        </span>
        <p className="text-base font-light text-secondary mt-2 max-w-80 sm:max-w-95">
          اگه یه وقت به مشکلی خوردی، سوالی درباره پرداخت، دسترسی، یا هر موضوع
          کلی داشتی، می‌تونی برامون تیکت بزنی.
        </p>
      </div>
      <Button
        className="flex items-center gap-x-1 text-caption text-brand"
        variant="link"
      >
        <HiOutlinePlus className="size-5 relative mb-1" />
        ایجاد تیکت جدید{" "}
      </Button>
    </div>
  );
};