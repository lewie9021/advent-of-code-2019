import { calculateFuel, calculateAdditionalFuel } from "../day-1";

describe("calculateFuel", () => {
  it("returns 2 for a mass of 12", () => {
    expect(calculateFuel(12)).toEqual(2);
  });

  it("returns 2 for a mass of 14", () => {
    expect(calculateFuel(14)).toEqual(2);
  });

  it("returns 654 for a mass of 1969", () => {
    expect(calculateFuel(1969)).toEqual(654);
  });

  it("returns 33583 for a mass of 100756", () => {
    expect(calculateFuel(100756)).toEqual(33583);
  });
});

describe("calculateAdditionalFuel", () => {
  it("returns 2 for a mass of 14", () => {
    expect(calculateAdditionalFuel(14)).toEqual(2);
  });

  it("returns 966 for a mass of 1969", () => {
    expect(calculateAdditionalFuel(1969)).toEqual(966);
  });

  it("returns 50346 for a mass of 100756", () => {
    expect(calculateAdditionalFuel(100756)).toEqual(50346);
  })
});