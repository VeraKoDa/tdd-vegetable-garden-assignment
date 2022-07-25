const getYieldForPlant = (vegetable, environmentFactors) => {
  if (environmentFactors === undefined) {
    return vegetable.yield;
  }

  valueCalculation = (factor) => {
    console.log(factor);
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

const getYieldForCrop = (input) => {
  if (input.environment === undefined) {
    return input.crop.yield * input.numCrops;
  }

  valueCalculation = (factor) => {
    if (factor === undefined) {
      return 1;
    } else {
      return (100 + factor) / 100;
    }
  };

  const sunFactor = input.environment.sun;
  const sunValue = valueCalculation(input.crop.factor.sun[sunFactor]);
  const rainFactor = input.environment.rain;
  const rainValue = valueCalculation(input.crop.factor.rain[rainFactor]);
  const windFactor = input.environment.wind;
  const windValue = valueCalculation(input.crop.factor.wind[windFactor]);

  const totalYield = input.crop.yield * sunValue * rainValue * windValue;
  return Math.round(totalYield * input.numCrops * 10) / 10;
};

const getTotalYield = (input) => {
  let result = 0;

  input.crops.forEach((vegetable) => {
    if (vegetable.environment === undefined) {
      console.log(`in undefined `);
      return (result += vegetable.crop.yield * vegetable.numCrops);
    }

    valueCalculation = (factor) => {
      if (factor === undefined) {
        return 1;
      } else {
        return (100 + factor) / 100;
      }
    };

    const sunFactor = vegetable.environment.sun;
    const sunValue = valueCalculation(vegetable.crop.factor.sun[sunFactor]);
    const rainFactor = vegetable.environment.rain;
    const rainValue = valueCalculation(vegetable.crop.factor.rain[rainFactor]);
    const windFactor = vegetable.environment.wind;
    const windValue = valueCalculation(vegetable.crop.factor.wind[windFactor]);

    const totalYield = vegetable.crop.yield * sunValue * rainValue * windValue;
    result += Math.round(totalYield * vegetable.numCrops * 10) / 10;

    // result += vegetable.crop.yield * vegetable.numCrops
  });

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
