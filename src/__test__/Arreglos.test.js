import * as Arreglos from "../arreglos";

describe("Validando datos de arreglos", () => {
    test("1 .- Contiene un mango?", () => {
        const { FRUITS } = Arreglos;
        expect(FRUITS).toContain("Mango");
    });
    test("2 .- No Contiene una Guanabana?", () => {
        const { FRUITS } = Arreglos;
        expect(FRUITS).not.toContain("Guanabana");
    });
    test("3 .- La logitud del arreglo COLOR es de 6", () => {
        const { COLOR } = Arreglos;
        expect(COLOR).toHaveLength(6);
    });
    test("4 .- Contiene Gris", () => {
        const { COLOR } = Arreglos;
        expect(COLOR).toContain("Gris");
    });
});
