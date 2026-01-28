import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { Movie } from "../types/movie";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);
  // console.log(movies);
  return { movies, loading };
}
