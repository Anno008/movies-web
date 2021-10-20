import { getJSON } from "~/api/ApiCall";
import { MoviesData, MovieDetails } from "~/types";

export const fetchUpcomingMovies = (page: number): Promise<MoviesData> =>
  getJSON<MoviesData>({
    url: `movie/upcoming?page=${page}`
  });

export const searchMovies = (page: number, query: string): Promise<MoviesData> =>
  getJSON<MoviesData>({
    url: `search/movie?page=${page}&query=${query}`
  });

export const getMovieById = (id: number): Promise<MovieDetails> =>
  getJSON<MovieDetails>({
    url: `movie/${id}`
  });
