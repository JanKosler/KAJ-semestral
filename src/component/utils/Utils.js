export const GetValueColor = (percentValue) => {
  let color = percentValue > 0 ? 'text-green-500' : 'text-red-500';
  color = percentValue === 0 ? 'text-gray-700' : color;

  return color;
};

export const FormatCurrency = (amount, currencyCode) => {
  // Using the Intl.NumberFormat object to format the number
  const formattedAmount = new Intl.NumberFormat('en-IE', { style: 'currency', currency: currencyCode }).format(amount);
  return formattedAmount;
};
