/**
 * Get the color based on the percentage value
 * @param {number} percentValue The percentage value
 * @returns  The color class
 */
export const GetValueColor = (percentValue) => {
  let color = percentValue > 0 ? 'text-green-500' : 'text-red-500';
  color = percentValue === 0 ? 'text-gray-700' : color;

  return color;
};

/**
 * Format the currency amount
 * @param {number} amount
 * @param {string} currencyCode
 * @returns
 */
export const FormatCurrency = (amount, currencyCode) => {
  // Using the Intl.NumberFormat object to format the number
  const formattedAmount = new Intl.NumberFormat('en-IE', { style: 'currency', currency: currencyCode }).format(amount);
  return formattedAmount;
};
