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
            <Input
              type="text" // keep text for localization
              placeholder={toPersianNumber(placeholder ?? "")}
              dir={direction}
              value={toPersianNumber(field.value ?? "")}
              onChange={(e) => {
                const inputVal = e.target.value;
                const englishVal = toEnglishNumber(inputVal);

                if (type === "number") {
                  // Only digits allowed for number type
                  if (/^\d*$/.test(englishVal)) {
                    field.onChange(
                      englishVal === "" ? undefined : Number(englishVal),
                    );
                  }
                } else {
                  // For text, just convert digits but keep letters
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