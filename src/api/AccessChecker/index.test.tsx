import { Context } from "@azure/functions";
import accessChecker from "./index";

describe.each([
    ["Yuriy", "", 403],
    ["Yuriy", null, 403],
    ["Yuriy", "bebe", 403],
    ["Yuriy", "bloofle128600", 200],
])("access checker function", (name, pass, status) => {
    let context: Context;

    beforeEach(() => {
        context = ({ log: jest.fn() } as unknown) as Context;
    });

    test(`returns correct status code for POST with name '${name}' and '${pass}'`, async () => {

        const request = {
            query: {},
            body: { name: name, accessCode: pass},
            method: "POST",
          };

        await accessChecker(context, request);
        expect(context.res.status).toEqual(status);
    });
});

describe.each([
    ["Yuriy", "", 403],
    ["Yuriy", null, 403],
    ["Yuriy", "bebe", 403],
    ["Yuriy", "bloofle128600", 200],
])("access checker function", (name, pass, status) => {
    let context: Context;

    beforeEach(() => {
        context = ({ log: jest.fn() } as unknown) as Context;
    });

    test(`returns correct status code for GET name '${name}' and '${pass}'`, async () => {

        const request = {
            query: { name: name, accessCode: pass},
            method: "GET",
          };

        await accessChecker(context, request);
        expect(context.res.status).toEqual(status);
    });
});

describe.each([
    ["John", "bloofle128600"],
    ["Yuriy", "bloofle128600"],
])("access checker function", (name, pass) => {
    let context: Context;

    beforeEach(() => {
        context = ({ log: jest.fn() } as unknown) as Context;
    });

    test(`returns correct response for GET name '${name}' and '${pass}'`, async () => {

        const request = {
            query: { name: name, accessCode: pass},
            method: "GET",
          };

        await accessChecker(context, request);
        expect(context.res.body).toEqual(`Hello, ${name}. Welcome to my secret page!`);
    });
});

describe.each([
    ["John", "bloofle128600"],
    ["Yuriy", "bloofle128600"],
])("access checker function", (name, pass) => {
    let context: Context;

    beforeEach(() => {
        context = ({ log: jest.fn() } as unknown) as Context;
    });

    test(`returns correct response for POST name '${name}' and '${pass}'`, async () => {

        const request = {
            query: {},
            body: { name: name, accessCode: pass},
            method: "POST",
          };

        await accessChecker(context, request);
        expect(context.res.body).toEqual(`Hello, ${name}. Welcome to my secret page!`);
    });
});