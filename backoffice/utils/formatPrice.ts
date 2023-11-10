export function formatPriceVND(price: number): any {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return formatter.format(price);
}
//exporting the function that gives prices
export function formatPriceUSD(price: number): any {
  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
}
