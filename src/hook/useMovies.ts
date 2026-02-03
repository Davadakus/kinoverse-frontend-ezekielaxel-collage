import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesLoading, setMoviesLoading] = useState(true);
  const [moviesError, setMoviesError] = useState<Error | null>(null);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(setMoviesError)
      .finally(() => setMoviesLoading(false));
  }, []);

  return { movies, moviesLoading, moviesError };
}
