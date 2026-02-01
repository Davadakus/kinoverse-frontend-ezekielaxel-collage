import { useEffect, useState } from "react";
import { getMoviesByIds } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMoviesByIds(ids: number[] | null) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [filteredLoading, setFilteredLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ids || ids.length === 0) {
      setFilteredMovies([]);
      setFilteredLoading(false);
      return;
    }

    setFilteredLoading(true);

    getMoviesByIds(ids)
      .then(setFilteredMovies)
      .catch(setError)
      .finally(() => setFilteredLoading(false));
  }, [ids?.join(",")]); // Workaround to check for updated value using string instead of array

  return { filteredMovies, filteredLoading, error };
}
