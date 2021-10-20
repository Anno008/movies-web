import { fetchUpcomingMovies, getMovieById, searchMovies } from "../MovieService";
import { FetchConfig } from "~/api/ApiCall";
import { movieDetailsFixture } from "~/testUtils/fixtures/movieDetailsFixture";
import { moviesDataFixture } from "~/testUtils/fixtures/moviesDataFixture";

const mockGetJson = jest.fn();
jest.mock("../../apiCall.ts", () => ({
  getJSON: (config: FetchConfig) => mockGetJson(config)
}));

describe("movieService tests", () => {
  beforeEach(() => {
    mockGetJson.mockClear();
  });
  it("Should return upcoming movies data response", async () => {
    mockGetJson.mockImplementation(() => Promise.resolve(moviesDataFixture));

    const response = await fetchUpcomingMovies(1);

    expect(response).toStrictEqual(moviesDataFixture);
    expect(mockGetJson).toHaveBeenCalledWith({
      url: "movie/upcoming?page=1"
    });
  });

  it("Should return searched movies data response", async () => {
    mockGetJson.mockImplementation(() => Promise.resolve(moviesDataFixture));

    const response = await searchMovies(1, "test");

    expect(response).toStrictEqual(moviesDataFixture);
    expect(mockGetJson).toHaveBeenCalledWith({
      url: "search/movie?page=1&query=test"
    });
  });

  it("Should return movie response", async () => {
    mockGetJson.mockImplementation(() => Promise.resolve(movieDetailsFixture));

    const response = await getMovieById(1);

    expect(response).toStrictEqual(movieDetailsFixture);
    expect(mockGetJson).toHaveBeenCalledWith({
      url: "movie/1"
    });
  });
});
