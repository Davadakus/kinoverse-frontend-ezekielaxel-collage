import { useEffect, useState } from "react";
import { getMovieById } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovieById(id: number) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieLoading, setMovieLoading] = useState(true);
  const [movieError, setMovieError] = useState<Error | null>(null);

  useEffect(() => {
    setMovie(null);
    setMovieLoading(true);

    getMovieById(id)
      .then(setMovie)
      .catch(setMovieError)
      .finally(() => setMovieLoading(false));
  }, [id]);

  return { movie, movieLoading, movieError };
}
