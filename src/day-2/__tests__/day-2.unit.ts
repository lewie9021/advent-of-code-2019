import { executeOpcode } from "../day-2";

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