/* eslint-disable */
import { Sumar } from "../math";

describe("Usando comparadores de numeros", () => {
    test("1 .- El resultado es Mayor que `toBeGreaterThan`", () => {
        const SUMA = Sumar(10, 40);
        expect(SUMA).toBeGreaterThan(49);
    });
    test("2 .- El resultado es Mayor o igual `toBeGreaterThanOrEqual`", () => {
        const SUMA = Sumar(10, 40);
        expect(SUMA).toBeGreaterThanOrEqual(49);
    });
    test("3 .- El resultado es Menor que `toBeLessThan`", () => {
        const SUMA = Sumar(2, 2);
        expect(SUMA).toBeLessThan(5);
    });
    test("4 .- El resultado es Menor o igual `toBeLessThanOrEqual`", () => {
        const SUMA = Sumar(10, 40);
        expect(SUMA).toBeLessThanOrEqual(51);
    });
    test("5 .- Validando numeros flotantes`", () => {
        const SUMA = Sumar(.992, .192);
        expect(SUMA).toBeCloseTo(1.184);
    });
});