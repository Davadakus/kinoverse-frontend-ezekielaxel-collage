import { useEffect, useState } from "react";
import { getMovieRecommendation } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovieRecommendations(id: number) {
  const [movieRec, setMovieRec] = useState<Movie[]>([]);
  const [loadingMovieRec, setLoadingMovieRec] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setMovieRec([]);
    setLoadingMovieRec(true);

    getMovieRecommendation(id)
      .then(setMovieRec)
      .catch(setError)
      .finally(() => setLoadingMovieRec(false));
  }, [id]);

  return { movieRec, loadingMovieRec, error };
}
