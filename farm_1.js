// ** Get yield for 1 plant ** \\
const getYieldForPlant = (vegetable, environmentFactors) => {
  if (environmentFactors === undefined) {
    return vegetable.yield;
  }

  valueCalculation = (factor) => {
    if (factor === undefined) {
      return 1;
    } else {
      return (100 + factor) / 100;
    }
  };

  // sun factors
  const sunFactor = environmentFactors.sun;
  const sunValue = valueCalculation(vegetable.factor.sun[sunFactor]);

  // rain factors
  const rainFactor = environmentFactors.rain;
  const rainValue = valueCalculation(vegetable.factor.rain[rainFactor]);

  // wind factors
  const windFactor = environmentFactors.wind;
  const windValue = valueCalculation(vegetable.factor.wind[windFactor]);

  return vegetable.yield * sunValue * rainValue * windValue;
};

// ** Get yield for crop ** \\
const getYieldForCrop = (vegetable) => {
  if (vegetable.environment === undefined) {
    return vegetable.crop.yield * vegetable.numCrops;
  }

  const getYield = getYieldForPlant(vegetable.crop, vegetable.environment);
  return Math.round(getYield * vegetable.numCrops * 10) / 10;
};

// ** Get total yield ** \\
const getTotalYield = (vegetables) => {
  let result = 0;

  vegetables.crops.forEach((vegetable) => {
    if (vegetable.environment === undefined) {
      return (result += vegetable.crop.yield * vegetable.numCrops);
    }

    const getYield = getYieldForCrop(vegetable);
    result += Math.round(getYield * 10) / 10;
  });

  return result;
};

// ** Get costs for crop ** \\
const getCostsForCrop = (vegetable) =>
  vegetable.crop.costs * vegetable.numCrops;

const getRevenueForCrop = (soldVegetables) => {
  const vegetable = soldVegetables.crop;

  if (soldVegetables.environment === undefined) {
    return vegetable.salePrice * vegetable.yield * soldVegetables.numCrops;
  }

  const yieldForCrop = getYieldForCrop(soldVegetables);
  return vegetable.salePrice * yieldForCrop;
};

// ** Get profit for crop ** \\
const getProfitForCrop = (soldVegetables) => {
  const vegetable = soldVegetables.crop;

  if (soldVegetables.environment === undefined) {
    (vegetable.salePrice * vegetable.yield - vegetable.costs) *
      soldVegetables.numCrops;
  }

  const totalYieldRevenue = getRevenueForCrop(soldVegetables);
  return totalYieldRevenue - vegetable.costs;
};

// ** Get total profit ** \\
const getTotalProfit = (cropsSold) => {
  let result = 0;
  let vegetableArray = cropsSold.crops;

  vegetableArray.forEach((vegetable) => {
    if (vegetable.environment === undefined) {
      result +=
        (vegetable.crop.yield * vegetable.crop.salePrice -
          vegetable.crop.costs) *
        vegetable.numCrops;
      return;
    }

    const totalYieldRevenue = getRevenueForCrop(vegetable);
    result += totalYieldRevenue - vegetable.crop.costs * vegetable.numCrops;
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
