"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  label: string;
  filterParam: string;
}

const FilterToggle = ({ label, filterParam }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // مقدار اولیه را در useEffect تنظیم می‌کنیم تا از مشکلات Hydration جلوگیری کنیم
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(!!searchParams.get(filterParam)); // بررسی می‌کند که آیا پارامتر در URL وجود دارد یا نه
  }, [searchParams, filterParam]);

  const handleToggle = (isChecked: boolean) => {
    setChecked(isChecked);

    // دریافت پارامترهای فعلی و به‌روزرسانی آن‌ها
    const params = new URLSearchParams(searchParams.toString());

    if (isChecked) {
      params.set(filterParam, "true");
    } else {
      params.delete(filterParam);
    }

    // تغییر مسیر بدون نیاز به استفاده از `/courses` به‌طور مستقیم
    router.push("?" + params.toString());
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg flex items-center justify-between p-4">
      <Label
        htmlFor={`switch-${filterParam}`}
        className="font-semibold text-sm text-slate-900"
      >
        {label}
      </Label>
      <Switch
        id={`switch-${filterParam}`}
        onClick={() => handleToggle(!checked)}
        checked={checked}
      />
    </div>
  );
};

export default FilterToggle;
