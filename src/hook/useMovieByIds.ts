import { useEffect, useState } from "react";
import { getMoviesByIds } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMoviesByIds(ids: number[] | null) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [filteredLoading, setFilteredLoading] = useState(false);

  useEffect(() => {
    if (!ids || ids.length === 0) {
      setFilteredMovies([]);
      setFilteredLoading(false);
      return;
    }

    setFilteredLoading(true);

    getMoviesByIds(ids)
      .then(setFilteredMovies)
      .finally(() => setFilteredLoading(false));
  }, [ids?.join(",")]);

  return { filteredMovies, filteredLoading };
}
