export const convertToPersianNumbers = (number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

export function convertToPersianAndFormat(number) {
  // Convert the number to a string and format it with commas
  const formattedNumber = number.toLocaleString("en-US");

  // Convert the digits to Persian
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const persianNumber = formattedNumber.replace(
    /\d/g,
    (digit) => persianDigits[digit],
  );

  return persianNumber;
}

export function calculateDiscount(price, discount) {
  const { percentage, amount } = discount;

  if (percentage) {
    // If a percentage is provided
    const discountValue = (price * percentage) / 100;
    return price - discountValue;
  } else if (amount) {
    // If a fixed amount is provided
    return price - amount;
  }

  // If no discount is provided
  return price;
}
