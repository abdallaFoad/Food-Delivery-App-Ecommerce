const FORMAT_CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (num) => {
  return FORMAT_CURRENCY.format(num);
}

export default formatCurrency;