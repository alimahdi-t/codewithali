import React from "react";

interface Props {
  password?: string;
}

export const CheckPassword = ({ password = "" }: Props) => {
  if (!password) return null;

  const checks = {
    minLength: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[!@#$%^&*()_+=-]/.test(password),
    illegalChar: /[^A-Za-z0-9!@#$%^&*()_+=-]/.test(password),
  };

  const getClass = (isValid: boolean) =>
    isValid ? "text-green-600" : "text-red-700";

  return (
    <div className="text-xs leading-6">
      <ul className="list-disc ps-5 space-y-1">
        <li className={getClass(checks.minLength)}>شامل حداقل ۸ کاراکتر</li>
        <li className={getClass(checks.lowercase)}>
          شامل حداقل یک حرف کوچک انگلیسی
        </li>
        <li className={getClass(checks.uppercase)}>
          شامل حداقل یک حرف بزرگ انگلیسی
        </li>
        <li className={getClass(checks.number)}>شامل حداقل یک عدد</li>
        <li className={getClass(checks.specialChar)}>
          شامل یک کاراکتر خاص مجاز
        </li>
        {checks.illegalChar && (
          <li className="text-action-error">
            شامل کاراکتر غیرمجاز است (فقط حروف انگلیسی، اعداد و این کاراکترها
            مجازند: ! @ # $ % ^ &amp; * ( ) _ + = -)
          </li>
        )}
      </ul>
    </div>
  );
};