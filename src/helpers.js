function calculateTipAmount(price, tipPercent) {
  // since we're rounding the total, we need to subtract the price from the
  // rounded total to get an accurate tip amount
  return (calculateTotal(price, tipPercent) - price).toFixed(2);
}

function calculateTotal(price, tipPercent) {
  return Math.round(price + price * tipPercent).toFixed(2);
}

export { calculateTipAmount, calculateTotal };
