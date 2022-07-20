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

const getYieldForPlant = (plant, environmentFactor) => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (input) => {
  let result = 0;

  input.crops.forEach(
    (vegetable) => (result += vegetable.crop.yield * vegetable.numCrops)
  );

  return result;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};
