import GetDataFromApi from "../promise";

describe("Probando una promesa", () => {
    test("Preticion a una api", (done) => {
        const API = "https://rickandmortyapi.com/api/character/";
        GetDataFromApi(API)
            .then((data) => {
                const CHARACTER = data.results.length;
                expect(data).toHaveProperty("results");
                expect(CHARACTER).toBeGreaterThan(0);
                done();
            });
    });
    test("Resolve de una promise", () => expect(Promise.resolve("esto es un resolve")).resolves.toBe("esto es un resolve"));
    test("Reject de una promise", () => {
        const ERRROR = new Error("Esto es un error");
        return expect(Promise.reject(ERRROR)).rejects.toThrow("Esto es un error");
    });
});
