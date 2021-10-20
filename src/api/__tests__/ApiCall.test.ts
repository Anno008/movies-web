import { getJSON } from "~/api/ApiCall";
import { apiKey, apiUrl } from "~/constants/Config";

describe("ApiCall tests", () => {
  it("Should return json object when calling getJSON", async () => {
    const jsonMock = {
      value: "test",
      id: 1
    };

    const url = "test";
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ...fetch.prototype,
        json: () => Promise.resolve(jsonMock),
        status: 200
      })
    );
    const response = await getJSON({
      url
    });

    expect(response).toEqual(jsonMock);
    expect(fetchSpy).toHaveBeenCalledWith(`${apiUrl}/${url}?api_key=${apiKey}`, {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      method: "GET"
    });
  });

  it("Should format query string if query params are provided", async () => {
    const jsonMock = {
      value: "test",
      id: 1
    };

    const url = "test?param1=1&param2=2";
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ...fetch.prototype,
        json: () => Promise.resolve(jsonMock),
        status: 200
      })
    );
    const response = await getJSON({
      url
    });

    expect(response).toEqual(jsonMock);
    expect(fetchSpy).toHaveBeenCalledWith(`${apiUrl}/${url}&api_key=${apiKey}`, {
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      method: "GET"
    });
  });
});
