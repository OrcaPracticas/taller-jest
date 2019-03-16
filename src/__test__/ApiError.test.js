import GetDataFromApi from "../promise";
import "babel-polyfill";

describe("Probando Apis con error", () => {
    test("Error 404", async () => {
        const ERROR = "http://httpstat.us/404";
        const REQUEST = GetDataFromApi(ERROR);
        await expect(REQUEST).rejects.toEqual(Error("Request failed with status code 404"));
    });
    test("Error 500", async () => {
        const ERROR = "http://httpstat.us/500";
        const REQUEST = GetDataFromApi(ERROR);
        await expect(REQUEST).rejects.toEqual(Error("Request failed with status code 500"));
    });
});
