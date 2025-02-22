export const convertToPersianNumbers = (number: string | number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
};

export function convertToPersianAndFormat(number: string | number): string {
  // Convert the number to a string and format it with commas
  const formattedNumber = Number(number).toLocaleString("en-US");

  // Convert the digits to Persian
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return formattedNumber.replace(
    /\d/g,
    (digit) => persianDigits[parseInt(digit, 10)],
  );
}

type Discount = {
  percentage?: number;
  amount?: number;
};

export function calculateDiscount(
  price: string | number,
  discount: Discount,
): number {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(numericPrice)) throw new Error("Invalid price value");

  const { percentage, amount } = discount;

  if (percentage) {
    // If a percentage is provided
    const discountValue = (numericPrice * percentage) / 100;
    return numericPrice - discountValue;
  } else if (amount) {
    // If a fixed amount is provided
    return numericPrice - amount;
  }

  // If no discount is provided
  return numericPrice;
}
