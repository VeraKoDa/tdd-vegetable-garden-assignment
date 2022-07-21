const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
} = require("./farm_1");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate the cost for a crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    const crops = [{ crop: corn, numCrops: 10 }];
    expect(getCostsForCrop(input)).toBe(20);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate the revenue for a crop (without environmental factors)", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
      salePrice: 2,
    };
    const sold = {
      crop: corn,
      numCrops: 5,
    };
    expect(getRevenueForCrop(sold)).toBe(30); // (salesPrice) 2 * (yield) 3 = € 6,- per crop. (crops) 5 * 6 = € 30
  });
});

describe("getProfitForCrop", () => {
  test("calculate the profit for a crop (without environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
      salePrice: 2,
    };
    const sold = {
      crop: corn,
      numCrops: 5,
    };

    expect(getProfitForCrop(sold)).toBe(20);
  });
});
