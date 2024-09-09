import { describe, expect, it } from "vitest";
import { Dni } from "./Dni.js";

describe("Dni", () => {
  it('should return "T" for number 0', () => {
    const dni = new Dni(0);
    expect(dni.calculateLetter()).toBe("T");
  });
  it('should return "R" for number 1', () => {
    const dni = new Dni(1);
    expect(dni.calculateLetter()).toBe("R");
  });
  it('should return "W" for number 2', () => {
    const dni = new Dni(2);
    expect(dni.calculateLetter()).toBe("W");
  });
  it('should return "A" for number 3', () => {
    const dni = new Dni(3);
    expect(dni.calculateLetter()).toBe("A");
  });
  it('should return "G" for number 4', () => {
    const dni = new Dni(4);
    expect(dni.calculateLetter()).toBe("G");
  });
  it("should throw an error for a number out of range", () => {
    expect(() => new Dni(-1)).toThrow("The information entered is incorrect");
    expect(() => new Dni(100000000)).toThrow(
      "The information entered is incorrect"
    );
  });
  it("should throw an error for non-numeric data", () => {
    expect(() => new Dni("ABC")).toThrow(
      "The information entered is incorrect"
    );
  });
});
