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

const getYieldForPlant = (vegetable, environmentFactor) => vegetable.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (input) => {
  let result = 0;

  input.crops.forEach(
    (vegetable) => (result += vegetable.crop.yield * vegetable.numCrops)
  );

  return result;
};

const getCostsForCrop = (input) => input.crop.costs * input.numCrops;

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
};
