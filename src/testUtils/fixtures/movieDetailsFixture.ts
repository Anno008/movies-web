import { genreDataFixture } from "./genreFixture";
import { MovieDetails } from "~/types";

export const movieDetailsFixture: MovieDetails = {
  adult: false,
  backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
  genres: genreDataFixture.genres,
  homepage: "https://www.disneyplus.com/movies/luca/7K1HyQ6Hl16P",
  id: 385128,
  original_language: "en",
  original_title: "F9",
  overview:
    "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
  popularity: 3158.854,
  poster_path: "/qIicLxr7B7gIt5hxZxo423BJLlK.jpg",
  release_date: "2021-05-19",
  title: "F9",
  video: false,
  vote_average: 7.7,
  vote_count: 403
};
