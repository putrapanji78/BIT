const jualBeliSaham = (data) => {
  let minPrice = data[0],
    maxProfit = 0;
  if (data.length < 2) {
    return 0;
  }

  for (let i = 1; i < data.length; i++) {
    const currentPrice = data[i];
    minPrice = Math.min(minPrice, currentPrice);
    const profit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  if (maxProfit === 0) {
    return "Harga selalu turun";
  }
  return maxProfit;
};

const samplePrices = [100, 90, 80, 75, 65];
console.log("Sample Output:\n" + jualBeliSaham(samplePrices));
