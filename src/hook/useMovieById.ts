import { useEffect, useState } from "react";
import { getMovieById } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovieById(id: number) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loadingMovieBId, setLoadingMovieBId] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setMovie(null);
    setLoadingMovieBId(true);

    getMovieById(id)
      .then(setMovie)
      .catch(setError)
      .finally(() => setLoadingMovieBId(false));
  }, [id]);

  return { movie, loadingMovieBId, error };
}
