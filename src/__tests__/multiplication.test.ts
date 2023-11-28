import { describe, expect, test } from 'vitest'

// Pas besoin de gérer les paramètres de longueur différents car ils ont déjà été gérés dans l'addition (voir la correction)

import {
  multiplication,
} from "../modules/multiplication.ts";

describe("Multiplication with", () => {


    describe("Positive numbers", () => {

      test("Two positives ones", () => {
        expect(() => multiplication(1, 1)).toBe(1); // 1 x 1 = 1
      })

      test("A one-digit number and a two-digit number", () => {
        expect(() => multiplication(1, 10)).toBe(10); // 1 x 10 = 10
      })

      test("A two-digit number and a one-digit number", () => {
        expect(() => multiplication(10, 1)).toBe(10); // 10 x 1 = 10
      })

      test("Two one-digit numbers (Reflexivity test)", () => {
        expect(() => multiplication(2, 3)).toBe(6); // 2 x 3 = 6
      })

    })


    describe("Negative numbers", () => {

      test("Two ones", () => {
        expect(() => multiplication(-1, -1)).toBe(1); // -1 x -1 = 1
      })

      test("A one-digit number and a two-digit number", () => {
        expect(() => multiplication(-1, -10)).toBe(10); // -1 x -10 = 10
      })

      test("A two-digit number and a one-digit number", () => {
        expect(() => multiplication(-10, -1)).toBe(10); // -10 x -1 = 10
      })

      test("Two one-digit numbers (Reflexivity test)", () => {
        expect(() => multiplication(-2, -3)).toBe(6); // -2 x -3 = 6
      })

    })


    describe("Zeros", () => {

      test("Zero and zero", () => {
        expect(() => multiplication(0, 0)).toBe(0); // 0 x 0 = 0
      })

      test("Negative zero and positive zero", () => {
        expect(() => multiplication(-0, 0)).toBe(0); // -0 x 0 = 0
      })

      test("Positive zero and negative zero", () => {
        expect(() => multiplication(0, -0)).toBe(0); // 0 x -0 = 0
      })
    
    })


    const positiveNumber = 3535
    const negativeNumber = -3535

    describe("Positive zero", () => {

      test("Zero and a positive number", () => {
        expect(() => multiplication(0, positiveNumber)).toBe(0); // 0 x 3535 = 0
      })

      test("A positive number and zero", () => {
        expect(() => multiplication(positiveNumber, 0)).toBe(0); // 3535 x 0 = 0
      })

      test("Zero and a negative number", () => {
        expect(() => multiplication(0, negativeNumber)).toBe(0); // 0 x -3535 = 0
      })

      test("A negative number and zero", () => {
        expect(() => multiplication(negativeNumber, 0)).toBe(0); // -3535 x 0 = 0
      })

    })


    describe("Negative zero", () => {

      test("A negative zero and a positive number", () => {
        expect(() => multiplication(-0, positiveNumber)).toBe(0); // -0 x 3535 = 0
      })

      test("A positive number and a negative zero", () => {
        expect(() => multiplication(positiveNumber, -0)).toBe(0); // 3535 x -0 = 0
      })

      test("A negative zero and a negative number", () => {
        expect(() => multiplication(-0, negativeNumber)).toBe(0); // -0 x -3535 = 0
      })

      test("A positive number and a a negative zero", () => {
        expect(() => multiplication(negativeNumber, -0)).toBe(0); // -3535 x -0 = 0
      })

    })


    describe("Negative and positives numbers", () => {

      test("A negative number and a positive number", () => {
        expect(() => multiplication(negativeNumber, positiveNumber)).lessThan(0); // -a x b < 0
      })

      test("A positive number and a negative number", () => {
        expect(() => multiplication(negativeNumber, positiveNumber)).lessThan(0); // a x -b < 0
      })

    })
})