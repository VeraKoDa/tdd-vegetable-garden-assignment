/* 
const corn = {
  name: "corn",
  yield: 30,
  factor: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
  },
};
 */

const getYieldForPlant = (vegetable) => vegetable.yield;

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
  console.log(result);
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
