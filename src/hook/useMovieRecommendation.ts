import { useEffect, useState } from "react";
import { getMovieRecommendation } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovieRecommendations(id: number) {
  const [movieRec, setMovieRec] = useState<Movie[]>([]);
  const [movieRecLoading, setMovieRecLoading] = useState(true);
  const [movieRecError, setMovieRecError] = useState<Error | null>(null);

  useEffect(() => {
    setMovieRec([]);
    setMovieRecLoading(true);

    getMovieRecommendation(id)
      .then(setMovieRec)
      .catch(setMovieRecError)
      .finally(() => setMovieRecLoading(false));
  }, [id]);

  return { movieRec, movieRecLoading, movieRecError };
}
