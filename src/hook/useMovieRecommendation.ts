import { useEffect, useState } from "react";
import { getMovieRecommendation } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovieRecommendations(id: number) {
  const [movieRec, setMovieRec] = useState<Movie[]>([]);
  const [loadingMovieRec, setLoadingMovieRec] = useState(true);

  useEffect(() => {
    setMovieRec([]);
    setLoadingMovieRec(true);

    getMovieRecommendation(id)
      .then(setMovieRec)
      .finally(() => setLoadingMovieRec(false));
  }, [id]);

  return { movieRec, loadingMovieRec };
}
