import { rick, getCharacter } from "../snapshot";

describe("Utilizando instantaneas", () => {
    test("snapshot", () => {
        console.log(getCharacter(rick));
        expect(getCharacter(rick)).toMatchSnapshot();
    });
    test("Siempre falla", () => {
        const USER = {
            id: Math.floor(Math.random() * 20),
            create: new Date(),
        };
        expect(USER).toMatchSnapshot();
    });
    test("Puede resivir cualquier valor", () => {
        const USER = {
            id: Math.floor(Math.random() * 20),
            name: "Jmndez",
        };
        expect(USER).toMatchSnapshot({
            id: expect.any(Number),
        });
    });
});
