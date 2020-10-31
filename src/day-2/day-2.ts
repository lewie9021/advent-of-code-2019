import * as path from "path";
import { readArray } from "../helpers/input";

export const executeOpcode = (instructions: Array<number>, index: number) => {
  const opcode = instructions[index];

  switch (opcode) {
    case 99: {
      return {
        index: null,
        instructions
      };
    }
    case 1: {
      const [indexOne, indexTwo, outputIndex] = instructions.slice(index + 1);
      const total = instructions[indexOne] + instructions[indexTwo];
      const left = instructions.slice(0, outputIndex);
      const right = instructions.slice(outputIndex + 1)

      return {
        index: index + 4,
        instructions: [...left, total, ...right]
      };
    }
    case 2: {
      const [indexOne, indexTwo, outputIndex] = instructions.slice(index + 1);
      const total = instructions[indexOne] * instructions[indexTwo];
      const left = instructions.slice(0, outputIndex);
      const right = instructions.slice(outputIndex + 1)

      return {
        index: index + 4,
        instructions: [...left, total, ...right]
      };
    }
    default: {
      throw new Error(`Unknown opcode: ${opcode}`);
    }
  }
}

export const executeIntcode = (instructions: Array<number>, index = 0) => {
  const result = executeOpcode(instructions, index);

  if (result.index === null) {
    return result.instructions
  }

  return executeIntcode(result.instructions, result.index);
};

export const calculatePartOne = () => {
  const instructions = readArray(path.join(__dirname, "input.txt"))
    .map((opcode) => parseInt(opcode));
  const result = executeIntcode(instructions);

  return result[0];
};

export const main = () => {
  console.log("Part One:", calculatePartOne());
  // console.log("Part Two:", calculatePartTwo());
}

if (require.main === module) {
  main();
}