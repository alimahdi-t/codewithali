import { toEnglishNumber, toPersianNumber } from "@/utils";

export interface WordifyOptions {
  convertDigits?: boolean;
}

export function wordifyfa(
  input: string | number | null | undefined,
  options?: WordifyOptions,
): string {
  return wordifyfa_internal(input, 0, options);
}

function wordifyfa_internal(
  input: string | number | null | undefined,
  level: number = 0,
  options?: WordifyOptions,
): string {
  const default_options: Required<WordifyOptions> = {
    convertDigits: true,
  };
  options = { ...default_options, ...options };

  if (input === null || input === undefined || input === "") {
    return "";
  }

  const num: number = Number.parseInt(toEnglishNumber(input.toString()), 10);

  if (isNaN(num)) return "";

  // Handle negative numbers
  if (num < 0) {
    const positiveNum = Math.abs(num);
    return (
      (positiveNum < 1000 && !options.convertDigits ? "-" : "منفی ") +
      wordifyfa_internal(positiveNum, level, options)
    );
  }

  // Zero handling
  if (num === 0) {
    return level === 0 ? (options.convertDigits ? "صفر" : "0") : "";
  }

  let result = "";
  const yekan = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    dahgan = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
    sadgan = [
      "یکصد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ],
    dah = [
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هیجده",
      "نوزده",
    ];

  if (level > 0) {
    result += " و ";
    level -= 1;
  }

  if (num < 1000 && !options.convertDigits) {
    result += num.toString();
  } else if (num < 10 && options.convertDigits) {
    result += yekan[num - 1];
  } else if (num < 20 && options.convertDigits) {
    result += dah[num - 10];
  } else if (num < 100 && options.convertDigits) {
    result +=
      dahgan[Math.floor(num / 10) - 2] +
      wordifyfa_internal(num % 10, level + 1, options);
  } else if (num < 1000 && options.convertDigits) {
    result +=
      sadgan[Math.floor(num / 100) - 1] +
      wordifyfa_internal(num % 100, level + 1, options);
  } else if (num < 1_000_000) {
    result +=
      wordifyfa_internal(Math.floor(num / 1000), level, options) +
      " هزار" +
      wordifyfa_internal(num % 1000, level + 1, options);
  } else if (num < 1_000_000_000) {
    result +=
      wordifyfa_internal(Math.floor(num / 1_000_000), level, options) +
      " میلیون" +
      wordifyfa_internal(num % 1_000_000, level + 1, options);
  } else if (num < 1_000_000_000_000) {
    result +=
      wordifyfa_internal(Math.floor(num / 1_000_000_000), level, options) +
      " میلیارد" +
      wordifyfa_internal(num % 1_000_000_000, level + 1, options);
  } else if (num < 1_000_000_000_000_000) {
    result +=
      wordifyfa_internal(Math.floor(num / 1_000_000_000_000), level, options) +
      " تریلیارد" +
      wordifyfa_internal(num % 1_000_000_000_000, level + 1, options);
  }

  return result;
}

export function wordifyRials(
  num: string | number | null | undefined,
  options?: WordifyOptions,
): string {
  if (num === null || num === undefined || num === "") {
    return "";
  }
  return wordifyfa_internal(num, 0, options) + " ریال";
}

export function wordifyRialsInTomans(
  num: string | number | null | undefined,
  options?: WordifyOptions,
): string {
  if (num === null || num === undefined || num === "") {
    return "";
  }

  if (typeof num === "string") {
    num = parseInt(toPersianNumber(num), 10);
  }

  if (typeof num !== "number" || isNaN(num)) return "";

  const originalAmount = num;
  if (num >= 10 || num <= -10) {
    num = Math.floor(num / 10);
  } else {
    num = 0;
  }

  const haveRial = (originalAmount / 10).toString().split(".")[1];
  return (
    wordifyfa_internal(num, 0, options) +
    " تومان" +
    (num && haveRial ? " و " : "") +
    (haveRial ? `${wordifyfa_internal(haveRial, 0, options)} ریال` : "")
  );
}

export function wordifyTomans(
  num: string | number | null | undefined,
  options?: WordifyOptions,
): string {
  if (num === null || num === undefined || num === "") {
    return "";
  }
  return wordifyfa_internal(num, 0, options) + " تومان";
}