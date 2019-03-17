import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Action } from "../react";

Enzyme.configure({ adapter: new Adapter() });

describe("Cargando pruebas para react", () => {
    test("Comprobando props", () => {
        const PROPS = {
            text: "dummy",
            link: "http://dummy.com",
        };
        const MOUNT = mount({
            <Action {...PROPS} />
        });
        const DIV = MOUNT.find("div");
        const ANCHOR = MOUNT.find("a");
        expect(ANCHOR.text()).toBe("dummy");

    });
});