import { describe, expect, test } from 'vitest'

import {
  pow,
} from "../modules/pow.ts";

describe("Pow with", () => {
  const positiveNumber = 4
  const negativeNumber = -4
  describe("First number equal to zero", () => {
    test("Zero and zero", () => {
      expect(() => pow(0, 0)).toBe(1); // 0^0 = 1
    })
    test("Zero and positive pow", () => {
      expect(() => pow(0, positiveNumber)).toBe(0); // 0^4 = 0
    })
  })
  describe("First number equal to one", () => {
    test("One and positive pow", () => {
      expect(() => pow(1, positiveNumber)).toBe(1); // 1^4 = 1
    })
    test("One and negative pow", () => {
      expect(() => pow(1, negativeNumber)).toBe(1); // 1^(-4) = 1
    })
  })
  describe("First number positive", () => {
    describe("Positive pow", () => {
      test("Zero", () => {
        expect(() => pow(positiveNumber, 0)).toBe(negativeNumber^0); // 4^0 = 1
      })
      test("Positive number", () => {
        expect(() => pow(positiveNumber, positiveNumber)).toBe(positiveNumber^positiveNumber); // 4^4 = 16
      })
    })
    test("Negative pow", () => {
      expect(() => pow(negativeNumber, negativeNumber)).toThrow(Error);; // -4^-4 = error
    })
  })
  describe("First number negative", () => {
    describe("Positive pow", () => {
      test("Zero", () => {
        expect(() => pow(negativeNumber, 0)).toBe(negativeNumber^0); // -4^0 = -1
      })
      test("Positive number", () => {
        expect(() => pow(negativeNumber, positiveNumber)).toBe(positiveNumber^positiveNumber); // -4^4 = -16
      })
    })
    test("Negative pow", () => {
      expect(() => pow(negativeNumber, negativeNumber)).toThrow(Error);; // -4^-4 = error
    })
  })
})