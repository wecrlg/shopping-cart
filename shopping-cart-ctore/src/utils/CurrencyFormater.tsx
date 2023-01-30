const CurrencyFormater = new Intl.NumberFormat(undefined, {
  currency: "NGN",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CurrencyFormater.format(number);
}
