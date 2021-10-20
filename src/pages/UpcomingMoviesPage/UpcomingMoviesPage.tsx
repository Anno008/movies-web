import React, { useEffect, useState } from "react";

import { Waypoint } from "react-waypoint";

import { fetchUpcomingMovies } from "~/api/services/MovieService";
import { CssGrid, MainLayout } from "~/components/atoms";
import MovieCard from "~/components/MovieCard";
import locators from "~/testUtils/locators";
import { Movie, MoviesData } from "~/types";

const mergeMovieData = (newData: MoviesData, previousMovies?: Movie[]): MoviesData => ({
  ...newData,
  results: [...(previousMovies ? previousMovies : []), ...newData.results]
});

const UpcomingMoviesPage = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<MoviesData>();
  useEffect(() => {
    setIsLoading(true);
    fetchUpcomingMovies(page)
      .then(newMovies =>
        setMovies(prev => (page === 1 ? newMovies : mergeMovieData(newMovies, prev?.results)))
      )
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <MainLayout
      flexDirection="column"
      alignItems="center"
      gap="20px"
      contentContainerTestId={locators.upcomingMoviesPageContainer}>
      <CssGrid>{movies && movies.results.map(m => <MovieCard key={m.id} {...m} />)}</CssGrid>
      <Waypoint
        onEnter={() => {
          !isLoading && setPage(page + 1);
        }}
      />
    </MainLayout>
  );
};

export default UpcomingMoviesPage;
