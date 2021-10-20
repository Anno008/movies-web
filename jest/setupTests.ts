// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-test-id" });

// Global fetch mock as to prevent real fetch calls during test runs
// for individual test cases where we want to assert the behavior depending
// on the response data it is necessary to manually mock fetch per test unit
// Example:
// const fetchMock = jest
//    .spyOn(global, "fetch")
//    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve("What we want to receive") }));

// const result = await functionThatCallsFetch();
// expect(fetchMock).toHaveBeenCalledWith("url");
const unMockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      ...global.fetch.prototype,
      json: () => Promise.resolve(),
      arrayBuffer: () => Promise.resolve()
    });
});

afterAll(() => {
  global.fetch = unMockedFetch;
});
