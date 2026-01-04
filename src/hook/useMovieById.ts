import { useEffect, useState } from "react";
import { getMovieById } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovieById(id: number) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieById(id)
      .then(setMovie)
      .finally(() => setLoading(false));
  }, [id]);

  return { movie, loading };
}
