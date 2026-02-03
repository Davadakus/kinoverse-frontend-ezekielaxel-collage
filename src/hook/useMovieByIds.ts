import { useEffect, useState } from "react";
import { getMoviesByIds } from "../api/movies";
import type { Movie } from "../types/movie";

// This gets the list of Movie Id's that have been filtered and returns them in Movie datatype to be used
export function useMoviesByIds(ids: number[] | null) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [filteredMoviesLoading, setFilteredMoviesLoading] = useState(false);
  const [filteredMoviesError, setFilteredMoviesError] = useState<Error | null>(
    null,
  );

  useEffect(() => {
    if (!ids || ids.length === 0) {
      setFilteredMovies([]);
      setFilteredMoviesLoading(false);
      return;
    }

    setFilteredMoviesLoading(true);

    getMoviesByIds(ids)
      .then(setFilteredMovies)
      .catch(setFilteredMoviesError)
      .finally(() => setFilteredMoviesLoading(false));
  }, [ids?.join(",")]); // Workaround to check for updated value using string instead of array since react compares array references

  return { filteredMovies, filteredMoviesLoading, filteredMoviesError };
}
