describe("Realizando purebas en cadenas", () => {
    const CADENA_1 = "https://orcaslide.rocks/infinite-carousel/";
    const CADENA_2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
    test("1 .- Validando que mi cadena sea una URL", () => {
        expect(CADENA_1).toMatch(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/);
    });
    test("2 .- Validando que mi cadena no sea una URL", () => {
        expect(CADENA_2).not.toMatch(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/);
    });
    test("3 .- Validando longitud de una cadena", () => {
        expect(CADENA_2).toHaveLength(148);
    });
});