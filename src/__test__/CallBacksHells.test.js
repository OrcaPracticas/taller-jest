import CallBacksHells from "../callbacks";

describe("Probando callbacks", () => {
    test("Callback", (done) => {
        const DummyCallback = (param) => {
            expect(param).toBe("Probando mi callback");
            done();
        };
        CallBacksHells(DummyCallback);
    });
});
