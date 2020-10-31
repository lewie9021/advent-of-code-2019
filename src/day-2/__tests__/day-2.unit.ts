import { executeIntcode, executeOpcode } from "../day-2";

describe("executeOpcode", () => {
  it("supports an opcode of 1", () => {
    expect(executeOpcode([1, 0, 0, 2, 99], 0)).toEqual({
      index: 4,
      instructions: [1, 0, 2, 2, 99]
    })
  });

  it("supports an opcode of 2", () => {
    expect(executeOpcode([2, 0, 0, 2, 99], 0)).toEqual({
      index: 4,
      instructions: [2, 0, 4, 2, 99]
    })
  });

  it("supports an opcode of 99", () => {
    expect(executeOpcode([99], 0)).toEqual({
      index: null,
      instructions: [99]
    })
  });

  it("throws for unknown opcodes", () => {
    expect(() => executeOpcode([10], 0))
      .toThrow(new Error("Unknown opcode: 10"));
  });
});

describe("executeIntcode", () => {
  it("[1, 0, 0, 0, 99] -> [2, 0, 0, 0, 99]", () => {
    expect(executeIntcode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
  });

  it("[2, 3, 0, 3, 99] -> [2, 3, 0, 6, 99]", () => {
    expect(executeIntcode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
  });

  it("[2, 4, 4, 5, 99, 0] -> [2, 4, 4, 5, 99, 9801]", () => {
    expect(executeIntcode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
  });

  it("[1, 1, 1, 4, 99, 5, 6, 0, 99] -> [30, 1, 1, 4, 2, 5, 6, 0, 99]", () => {
    expect(executeIntcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });
});