const getYieldForPlant = (vegetable, environmentFactors) => {
  if (environmentFactors === undefined) {
    return vegetable.yield;
  }

  valueArray = (element) => {
    console.log(element);
    if (element === undefined) {
      return 1;
    } else {
      return (100 + element) / 100;
    }
  };

  // sun factors
  const sunFactor = environmentFactors.sun;
  const sunValue = valueArray(vegetable.factor.sun[sunFactor]);

  // rain factors
  const rainFactor = environmentFactors.rain;
  const rainValue = valueArray(vegetable.factor.rain[rainFactor]);

  // wind factors
  const windFactor = environmentFactors.wind;
  const windValue = valueArray(vegetable.factor.wind[windFactor]);

  return vegetable.yield * sunValue * rainValue * windValue;
};

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (input) => {
  let result = 0;

  input.crops.forEach(
    (vegetable) => (result += vegetable.crop.yield * vegetable.numCrops)
  );

  return result;
};

const getCostsForCrop = (vegetable) =>
  vegetable.crop.costs * vegetable.numCrops;

const getRevenueForCrop = (sold) =>
  sold.crop.salePrice * sold.crop.yield * sold.numCrops;

const getProfitForCrop = (sold) =>
  (sold.crop.salePrice * sold.crop.yield - sold.crop.costs) * sold.numCrops;

const getTotalProfit = (cropsSold) => {
  // console.log(`cropsSold = ${cropsSold.crops.crops[1]}`);
  let result = 0;

  cropsSold.crops.forEach((vegetable) => {
    result +=
      (vegetable.crop.yield * vegetable.crop.salePrice - vegetable.crop.costs) *
      vegetable.numCrops;
  });
  return result;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
