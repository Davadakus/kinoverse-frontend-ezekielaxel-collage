import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}
