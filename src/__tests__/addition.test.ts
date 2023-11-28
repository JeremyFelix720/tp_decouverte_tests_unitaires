import { describe, expect, test } from 'vitest'
import { sum, sumSmallNumbers } from '../modules/addition';

describe("Sum only for small numbers", () => {
  describe("errors on parameters", () => {
    test("Too big numbers ", () => {
      expect(() => sumSmallNumbers(10, 2)).toThrow(Error); // 10 + 2 = error
      expect(() => sumSmallNumbers(2, 10)).toThrow(Error); // 2 + 10 = error
      expect(() => sumSmallNumbers(10, 10)).toThrow(Error); // 10 + 10 = error
    });

    test("Too small numbers ", () => {
      expect(() => sumSmallNumbers(-1, 2)).toThrow(Error); // (-1) + 2 = error
      expect(() => sumSmallNumbers(1, -2)).toThrow(Error); // 1 + (-2) = error
      expect(() => sumSmallNumbers(-1, -2)).toThrow(Error); // (-1) + (-2) = error
    });

    test("zero ", () => {
      expect(() => sumSmallNumbers(0, 1)).not.toThrow(Error); // 0 + 1 = not an error
      expect(() => sumSmallNumbers(1, 0)).not.toThrow(Error); // 1 + 0 = not an error
    });
  });

  describe("Small sum of valid numbers", () => {
    test("positive", () => {
      expect(sumSmallNumbers(0, 0)).toBe(0); // 0 + 0 = 0
      expect(sumSmallNumbers(0, 9)).toBe(9); // 0 + 9 = 9
      expect(sumSmallNumbers(1, 9)).toBe(10); // 1 + 9 = 10
      expect(sumSmallNumbers(9, 9)).toBe(18); // 9 + 9 = 18
    });

    // MES TESTS

    /*
    test("negative", () => {
      expect(sumSmallNumbers(1, -2)).toThrow(Error); // 1 + (-2) = error
      expect(sumSmallNumbers(-1, 2)).toThrow(Error); // (-1) + 2 = error
      expect(sumSmallNumbers(-1, -2)).toThrow(Error); // (-1) + (-2) = error
    });
    */

    /*
    test("positive with zero", () => {
      expect(sumSmallNumbers(1, 0)).toBe(1); // 1 + 0 = 1
      expect(sumSmallNumbers(0, 1)).toBe(1); // 0 + 1 = 1
    })
    */

    /*
    test("negative with zero", () => {
      expect(sumSmallNumbers(-1, 0)).toThrow(Error); // (-1) + 0 = error
      expect(sumSmallNumbers(0, -1)).toThrow(Error); // 0 + (-1) = error
    })
    */

    /*
    test("positive and equal", () => {
      expect(sumSmallNumbers(1, 1)).toBe(2); // 1 + 1 = 2
    })

    /*
    test("negative and equal", () => {
      expect(sumSmallNumbers(-1, -1)).toThrow(Error); // (-1) + (-1) = error
    })
    */

    /*
    test("opposite", () => {
      expect(sumSmallNumbers(-1, 1)).toThrow(Error); // (-1) + 1 = error
      expect(sumSmallNumbers(1, -1)).toThrow(Error); // 1 + (-1) = error
    })
    */
  })
});




// MES TESTS (SUITE)

describe("Sum only for big numbers", () => {

    // Big sum of positive numbers
    // 10 + 1 = 11
    // 1 + 10 = 11
    // 10 + 12 = 22

    // Big sum of negative numbers
    // 10 + (-1) = 9
    // (-1) + 10 = 9
    // (-10) + 1 = -9
    // 1 + (-10) = -9
    // (-1) + (-10) = -11
    // (-10) + (-1) = -11
    // (-10) + (-12) = -22

    // Big sum of positive numbers with zero
    // 10 + 0 = 10
    // 0 + 10 = 10

    // Big sum of negative numbers with zero
    // (-10) + 0 = -10
    // 0 + (-10) = -10

    // Big sum of positive and equal numbers
    // 10 + 10 = 20

    // Big sum of negative and equal numbers
    // (-10) + (-10) = -20

    // Big sum of opposite numbers
    // (-10) + 10 = 0
    // 10 + (-10) = 0

})
