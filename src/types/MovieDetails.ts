import { Genre } from "./Genre";

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  genres: Genre[];
  id: number;
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
