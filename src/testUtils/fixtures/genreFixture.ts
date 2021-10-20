import { Genre, GenreData } from "~/types";

export const genreFixture1: Genre = {
  id: 28,
  name: "Action"
};

export const genreFixture2: Genre = {
  id: 12,
  name: "Adventure"
};

export const genreDataFixture: GenreData = {
  genres: [genreFixture1, genreFixture2]
};
