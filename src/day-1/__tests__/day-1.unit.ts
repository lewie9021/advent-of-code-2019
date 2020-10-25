import { calculateFuel } from "../day-1";

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