// export function formatCurrency(priceCents) {
//   return (Math.round(priceCents) / 100).toFixed(2);
// }

// export default formatCurrency;

export function formatCurrency(priceCents) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(priceCents);
}

export default formatCurrency;
