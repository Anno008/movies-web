import { fetchGenres } from "../GenreService";
import { FetchConfig } from "~/api/ApiCall";
import { genreDataFixture } from "~/testUtils/fixtures/genreFixture";

const mockGetJson = jest.fn();
jest.mock("../../apiCall.ts", () => ({
  getJSON: (config: FetchConfig) => mockGetJson(config)
}));

describe("genresService tests", () => {
  beforeEach(() => {
    mockGetJson.mockClear();
  });
  it("Should return genres data response", async () => {
    mockGetJson.mockImplementation(() => Promise.resolve(genreDataFixture));

    const response = await fetchGenres();

    expect(response).toStrictEqual(genreDataFixture);
    expect(mockGetJson).toHaveBeenCalledWith({
      url: "genre/movie/list"
    });
  });
});
