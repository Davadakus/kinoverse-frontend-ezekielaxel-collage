import { CircularProgress } from "@mui/material";
import { useMovies } from "../../hook/useMovies";
import MovieCard from "../molecules/MovieCard";
import { useMovieFilter } from "../../hook/useMovieFilter";
import type { Emotion } from "../../types/emotion";

interface MovieGridProps {
  selectedEmotions: Emotion[];
}

export default function MovieGrid({ selectedEmotions }: MovieGridProps) {
  const { movies, loading } = useMovies();
  const filteredMovieIds = useMovieFilter(selectedEmotions);

  return (
    <div className="mx-30">
      {loading ? (
        <div className="flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : filteredMovieIds === null ? (
        <div className="grid grid-flow-row grid-cols-4 gap-20">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="grid grid-flow-row grid-cols-4 gap-20">
          {movies
            .filter((movie) => filteredMovieIds.includes(movie.id))
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}
    </div>
  );
}
