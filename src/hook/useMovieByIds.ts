import { useEffect, useState } from "react";
import { getMoviesByIds } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMoviesByIds(ids: number[] | null) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [filteredLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!ids || ids.length === 0) {
      setFilteredMovies([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    getMoviesByIds(ids)
      .then(setFilteredMovies)
      .finally(() => setLoading(false));
  }, [ids?.join(",")]);

  return { filteredMovies, filteredLoading };
}
