import {
  movieFixture1,
  movieFixture2,
  movieFixture3,
  movieFixture4,
  movieFixture5,
  movieFixture6,
  movieFixture7,
  movieFixture8
} from "./movieFixture";
import { MoviesData } from "~/types";

export const moviesDataFixture: MoviesData = {
  page: 1,
  results: [
    movieFixture1,
    movieFixture2,
    movieFixture3,
    movieFixture4,
    movieFixture5,
    movieFixture6,
    movieFixture7,
    movieFixture8
  ],
  total_pages: 1,
  total_results: 8,
  dates: {
    maximum: "2021-07-30",
    minimum: "2021-07-05"
  }
};
