/* eslint-disable */
import { isNull, isTrue, isFalse, isUndefined } from "../true";

describe("Usando Truthness / Verdadero", () => {
    test("1 .- Validando que el valor recibido es null", () => {
        const IS_NULL = isNull();
        expect(IS_NULL).toBeNull();
    });
    test("2 .- Validando que el valor recibido es true", () => {
        const IS_TRUE = isTrue();
        expect(IS_TRUE).toBeTruthy();
    
    });
    test("3 .- Validando que el valor recibido es false", () => {
        const IS_FALSE = isFalse();
        expect(IS_FALSE).toBeFalsy();
    
    });
    test("4 .- Validando que el valor recibido es Undefined", () => {
        const IS_UNDEFINED = isUndefined();
        expect(IS_UNDEFINED).toBeUndefined();
    });
    test("5 .- Validando respuesta que puede ser no verdadera", () => {
        const IS_TRUE = isTrue();
        expect(!IS_TRUE).not.toBeTruthy();
    });

});