import { describe, expect, test } from 'vitest'

import {
  multiplication,
} from "../modules/multiplication.ts";

// Pas besoin de gérer les paramètres de longueur différents car ils ont déjà été gérés dans l'addition (voir la correction)

describe("Multiplication with", () => {
    const positiveNumber = 3535
    const negativeNumber = -positiveNumber
    describe("Same signs", () => {
      describe("Positive sign", () => {
        test("Zero and zero", () => {
          expect(multiplication(0, 0)).toBe(0); // 0 x 0 = 0
        })
        test("Positive one and positive number", () => {
          expect(multiplication(1, 2)).toBe(2); // 1 x 2 = 2
        })
        test("A positive number and one", () => {
          expect(multiplication(positiveNumber, 1)).toBe(positiveNumber); // 3535 x 1 = 3535
        })
        test("Two numbers (Reflexivity test)", () => {
          expect(multiplication(2, 3)).toBe(6); // 2 x 3 = 6
        })
      })
      describe("Negative sign", () => {
        test("Negative one and a negative number", () => {
          expect(multiplication(-1, -2)).toBe(2); // -1 x -2 = 2
        })
        test("A negative number and negative one", () => {
          expect(multiplication(negativeNumber, -1)).toBe(positiveNumber); // -3535 x -1 = 3535
        })
        test("Two negative numbers (Reflexivity test)", () => {
          expect(multiplication(-2, -3)).toBe(6); // -2 x -3 = 6
        })
      })
    })
    describe("Different signs", () => {
      describe("First number positive", () => {
        test("Positive one and a negative number", () => {
          expect(multiplication(1, negativeNumber)).toBe(negativeNumber); // 1 x -3535 = -3535
        })
        test("Positive number and negative one", () => {
          expect(multiplication(positiveNumber, -1)).toBe(-positiveNumber); // 3535 x -1 = -3535
        })
        test("Positive number and negative number", () => {
          expect(multiplication(negativeNumber, positiveNumber)).lessThan(0); // 3535 x -3535 < 0
        })
        test("Zero and positive number", () => {
          expect(multiplication(0, positiveNumber)).toBe(0); // 0 x 3535 = 0
        })
        test("Zero and negative number", () => {
          expect(multiplication(0, negativeNumber)).toBe(0); // 0 x -3535 = 0
        })
      })
      describe("First number negative", () => {
        test("Negative one and a positive number", () => {
          expect(multiplication(-1, positiveNumber)).toBe(negativeNumber); // -1 x 3535 = -3535
        })
        test("Negative number and positive one", () => {
          expect(multiplication(negativeNumber, 1)).toBe(negativeNumber); // -3535 x 1 = -3535
        })
        test("Negative number and positive number", () => {
          expect(multiplication(negativeNumber, positiveNumber)).lessThan(0); // -3535 x 3535 < 0
        })
        test("Negative number and zero", () => {
          expect(multiplication(negativeNumber, 0)).toBe(0); // -3535 x 0 = 0
        })
      })
    })
})