import { getJSON } from "~/api/ApiCall";
import { GenreData } from "~/types";

export const fetchGenres = (): Promise<GenreData> =>
  getJSON<GenreData>({
    url: "genre/movie/list"
  });
