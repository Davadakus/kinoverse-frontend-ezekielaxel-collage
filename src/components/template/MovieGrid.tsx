import { Typography } from "@mui/material";

import MovieCard from "../molecules/MovieCard";

import type { Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
  isLoading?: boolean;
}

export default function MovieGrid({ movies, isLoading }: MovieGridProps) {
  if (!isLoading && movies.length === 0) {
    return (
      <Typography variant="h5" fontWeight="bold">
        No Movies Found...
      </Typography>
    );
  }

  return (
    <div className="align-center mx-10 mt-8 grid grid-cols-4 place-items-center gap-20">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
