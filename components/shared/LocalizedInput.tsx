import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toEnglishNumber, toPersianNumber } from "@/utils";
import { Control, FieldValues, Path } from "react-hook-form";
import { wordifyTomans } from "@/utils/wordifyfa";
import { Eye, EyeOff } from "lucide-react"; // eye icons

interface LocalizedInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  direction?: "rtl" | "ltr";
  textAlign?: "center" | "left" | "right";
  showErrorMessage?: boolean;
  showPriceInWord?: boolean;
}

export const LocalizedInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  direction = "rtl",
  minLength,
  maxLength,
  textAlign = "left",
  showErrorMessage = true,
  showPriceInWord = false,
  ...props
}: LocalizedInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          {label && (
            <FormLabel className="block text-sm font-medium leading-6">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                type={isPassword && showPassword ? "text" : type}
                placeholder={toPersianNumber(placeholder ?? "")}
                dir={direction}
                value={toPersianNumber(field.value ?? "")}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  const englishVal = toEnglishNumber(inputVal);

                  if (type === "number") {
                    if (/^\d*$/.test(englishVal)) {
                      field.onChange(
                        englishVal === "" ? undefined : Number(englishVal),
                      );
                    }
                  } else {
                    field.onChange(englishVal);
                  }
                }}
                minLength={minLength}
                maxLength={maxLength}
                {...props}
                style={{
                  textAlign,
                }}
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500 z-10 cursor-pointer"
                  tabIndex={-1} // prevent tab focus
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
          </FormControl>
          {showErrorMessage && <FormMessage />}
          {showPriceInWord && (
            <p className="text-xs">{wordifyTomans(field.value)}</p>
          )}
        </FormItem>
      )}
    />
  );
};