import * as path from "path";
import { readLines } from "../helpers/input";

export const calculateFuel = (mass: number) => {
  return Math.floor(mass / 3) - 2;
}

export const calculateAdditionalFuel = (mass: number, total: number = 0) => {
  const fuel = calculateFuel(mass);

  if (fuel <= 0) {
    return total;
  }

  return calculateAdditionalFuel(fuel, total + fuel);
};

export const calculatePartOne = () => {
  return readLines(path.join(__dirname, "input.txt"))
    .map((mass) => calculateFuel(parseInt(mass)))
    .reduce((result, x) => result + x, 0);
};

export const calculatePartTwo = () => {
  return readLines(path.join(__dirname, "input.txt"))
    .map((mass) => calculateAdditionalFuel(parseInt(mass)))
    .reduce((result, x) => result + x, 0);
};

export const main = () => {
  console.log("Part One:", calculatePartOne());
  console.log("Part Two:", calculatePartTwo());
}

if (require.main === module) {
  main();
}