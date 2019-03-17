/* eslint-disable */
describe("Comporadores comunes", () => {
    const DATA_1 = {
        name: "Jorge",
        LastName: "Mendez Ortega",
        Edad: 33
    };

    const DATA_2 = {
        name: "Jorge",
        LastName: "Mendez Ortega",
        Edad: 33
    };

    test("Usando comparador `toEqual`", () => {
        expect(DATA_1.edad).toBe(DATA_2.edad);
    });

    test("Usando comparador `toEqual`", () => {
        expect(DATA_1.edad).not.toBe(DATA_2.name);
    });

    test("Usando comparador `toEqual`", () => {
        expect(DATA_1).toEqual(DATA_2);
    });

    test("Usando comparador `not.toEqual`", () => {
        // El comprador not puede concatenarse con cualkquier comprador
        expect(DATA_1.edad).not.toEqual(DATA_2,name);
    });

});