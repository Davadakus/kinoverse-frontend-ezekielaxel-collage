import { useEffect, useState } from "react";
import { getMoviesByIds } from "../api/movies";
import type { Movie } from "../types/movie";

// This gets the list of Movie Id's that have been filtered and returns them in Movie datatype to be used
export function useMoviesByIds(ids: number[] | null) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [resolvedIdsKey, setResolvedIdsKey] = useState<string | null>(null);
  const [filteredMoviesError, setFilteredMoviesError] = useState<Error | null>(
    null,
  );

  const idsKey = ids && ids.length > 0 ? ids.join(",") : null;

  useEffect(() => {
    if (!idsKey) {
      setFilteredMovies([]);
      setResolvedIdsKey(null);
      return;
    }

    getMoviesByIds(ids!)
      .then((movies) => {
        setFilteredMovies(movies);
        setResolvedIdsKey(idsKey);
      })
      .catch((err) => {
        setFilteredMoviesError(err);
        setResolvedIdsKey(idsKey);
      });
  }, [idsKey]);

  // Derived: loading whenever there are IDs to fetch but they haven't resolved yet.
  // This avoids a render gap where a separate `loading` state hasn't been set yet.
  const filteredMoviesLoading = idsKey !== null && idsKey !== resolvedIdsKey;

  return { filteredMovies, filteredMoviesLoading, filteredMoviesError };
}
