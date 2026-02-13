import { Typography } from "@mui/material";

import MovieCard from "../molecules/MovieCard";

import type { Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  if (movies.length === 0) {
    return (
      <Typography variant="h5" fontWeight="bold">
        No Movies Found...
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-20">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
