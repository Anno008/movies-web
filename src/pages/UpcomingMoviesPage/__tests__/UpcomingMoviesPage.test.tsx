import React from "react";

import { fireEvent, screen } from "@testing-library/react";

import UpcomingMoviesPage from "../UpcomingMoviesPage";
import { movieFixture1 } from "~/testUtils/fixtures/movieFixture";
import { moviesDataFixture } from "~/testUtils/fixtures/moviesDataFixture";
import { renderWithContext } from "~/testUtils/renderWithContext";

const mockFetchUpcomingMovies = jest.fn();
jest.mock("~/api/services/MovieService", () => ({
  fetchUpcomingMovies: (page: number) => mockFetchUpcomingMovies(page)
}));

describe("UpcomingMovies page tests", () => {
  beforeEach(() => {
    mockFetchUpcomingMovies.mockClear();
    mockFetchUpcomingMovies.mockResolvedValueOnce(moviesDataFixture).mockResolvedValueOnce({
      ...moviesDataFixture,
      results: moviesDataFixture.results.map((item, index) => ({
        ...item,
        id: item.id + (index + 1) * 2
      }))
    });
  });

  it("Should call fetch upcoming movies", async () => {
    renderWithContext(<UpcomingMoviesPage />);

    const movieTitle = await screen.findByText(movieFixture1.title);

    expect(movieTitle).toBeInTheDocument();
    expect(mockFetchUpcomingMovies).toHaveBeenCalledTimes(1);
    expect(mockFetchUpcomingMovies).toHaveBeenCalledWith(1);
  });

  it("Should call fetch page 2 when scrolling down", async () => {
    renderWithContext(<UpcomingMoviesPage />);

    fireEvent.scroll(window, {
      target: {
        scrollY: 500
      }
    });

    const movieTitle = await screen.findByText(movieFixture1.title);

    expect(movieTitle).toBeInTheDocument();
    expect(mockFetchUpcomingMovies).toHaveBeenCalledTimes(2);
    expect(mockFetchUpcomingMovies).toHaveBeenNthCalledWith(1, 1);
    expect(mockFetchUpcomingMovies).toHaveBeenNthCalledWith(2, 2);
  });
});
