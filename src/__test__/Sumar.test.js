/* eslint-disable */
import { Sumar, Restar, Multiplicar, Division } from "../math";

/**
 * Descripción de la prueba que estamos realizando.
 * 
 */
describe("Validando calculos matematicos", () => {
    describe("Valiando función Suma" , () => {
        test("1 .- Resiviendo el primer valor negativo", () => {
            const SUMA = Sumar(-1, 2);
            expect(SUMA).toBe(1);
        });

        test("2 .- Resiviendo el segundo valor negativo", () => {
            const SUMA = Sumar(1, -2);
            expect(SUMA).toBe(-1);
        });
        
        test("3 .- Resiviendo los dos valores negativos", () => {
            const SUMA = Sumar(-1, -2);
            expect(SUMA).toBe(-3);
        });

        test("4 .- No se mandan parametros", () => {
            const SUMA = Sumar();
            expect(SUMA).toBe(0);
        });

        test("5 .- Pasando los 2 parametros", () => {
            const SUMA = Sumar(6, 9);
            expect(SUMA).toBe(15);
        });
    });

    describe("Valiando función Resta" , () => {
        test("1 .- Resiviendo el primer valor negativo", () => {
            const RESTAR = Restar(-1, 2);
            expect(RESTAR).toBe(-3);
        });

        test("2 .- Resiviendo el segundo valor negativo", () => {
            const RESTAR = Restar(1, -2);
            expect(RESTAR).toBe(3);
        });
        
        test("3 .- Resiviendo los dos valores negativos", () => {
            const RESTAR = Restar(-1, -2);
            expect(RESTAR).toBe(1);
        });

        test("4 .- No se mandan parametros", () => {
            const RESTAR = Restar();
            expect(RESTAR).toBe(0);
        });

        test("5 .- Pasando los 2 parametros", () => {
            const RESTAR = Restar(6, 9);
            expect(RESTAR).toBe(-3);
        });
    });

    describe("Valiando función Multiplicar" , () => {
        test("1 .- Resiviendo el primer valor negativo", () => {
            const MULTIPLICAR = Multiplicar(-1, 2);
            expect(MULTIPLICAR).toBe(-2);
        });

        test("2 .- Resiviendo el segundo valor negativo", () => {
            const MULTIPLICAR = Multiplicar(1, -2);
            expect(MULTIPLICAR).toBe(-2);
        });
        
        test("3 .- Resiviendo los dos valores negativos", () => {
            const MULTIPLICAR = Multiplicar(-1, -2);
            expect(MULTIPLICAR).toBe(2);
        });

        test("4 .- No se mandan parametros", () => {
            const MULTIPLICAR = Multiplicar();
            expect(MULTIPLICAR).toBe(0);
        });

        test("5 .- Pasando los 2 parametros", () => {
            const MULTIPLICAR = Multiplicar(6, 9);
            expect(MULTIPLICAR).toBe(54);
        });
    })

    describe("Validacióm especial para division", () => {
        test("1 .- Regresando un valor con punto decimal", () => {
            const DIVISION = Division(5, 10);
            expect(DIVISION).toBe(0.5);
        });  
        test("2 .- Regresando un valor entero", () => {
            const DIVISION = Division(10,5);
            expect(DIVISION).toBe(2);
        });
        test("3 .- Division entre 0", () => {
            const DIVISION = Division(10,0);
            const IS_FINITE = isFinite(DIVISION);
            expect(IS_FINITE).toBeFalsy();
        });  
        test("4 .- Resiviendo el primer valor negativo", () => {
            const DIVISION = Division(-1, 2);
            expect(DIVISION).toBe(-0.5);
        });
        test("5 .- Resiviendo los dos valores negativos", () => {
            const DIVISION = Division(-1, -2);
            expect(DIVISION).toBe(0.5);
        });
        test("6 .- No se mandan parametros", () => {
            const DIVISION = Division();
            expect(DIVISION).toBe(NaN);
        });
    });
});