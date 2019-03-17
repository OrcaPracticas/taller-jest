import GetDataFromApi from "../promise";
import "babel-polyfill";

describe("Probando Async/Await", () => {
    test("Preticion a una api", async () => {
        const API = "https://rickandmortyapi.com/api/character/";
        const RICK = "https://rickandmortyapi.com/api/character/2";
        await GetDataFromApi(API)
            .then((data) => {
                const CHARACTER = data.results.length;
                expect(data).toHaveProperty("results");
                expect(CHARACTER).toBeGreaterThan(0);
            });
        await GetDataFromApi(RICK)
            .then((data) => {
                const DATA = data.results;
                expect(DATA.name).toEqual("Rick Sanchez");
            });
    });
});
