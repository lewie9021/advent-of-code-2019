import * as path from "path";
import { readLines } from "../helpers/input";

export const calculateFuel = (mass: number) => {
  return Math.floor(mass / 3) - 2;
}

export const calculatePartOne = () => {
  return readLines(path.join(__dirname, "input.txt"))
    .map((mass) => calculateFuel(parseInt(mass)))
    .reduce((result, x) => result + x, 0);
};

export const main = () => {
  console.log("Part One:", calculatePartOne());
}

if (require.main === module) {
  main();
}