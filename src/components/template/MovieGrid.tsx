import { CircularProgress, Typography } from "@mui/material";
import { useMovies } from "../../hook/useMovies";
import MovieCard from "../molecules/MovieCard";
import { useMovieFilter } from "../../hook/useMovieFilter";
import type { Emotion } from "../../types/emotion";
import { useMoviesByIds } from "../../hook/useMovieByIds";

interface MovieGridProps {
  selectedEmotions: Emotion[];
}

export default function MovieGrid({ selectedEmotions }: MovieGridProps) {
  const { movies, moviesLoading } = useMovies();
  const filteredMovieIds = useMovieFilter(selectedEmotions);
  const isFiltering = filteredMovieIds !== null; // False if null so it display ALL movies

  const { filteredMovies, filteredMoviesLoading, filteredMoviesError } =
    useMoviesByIds(filteredMovieIds);
  const isLoading = isFiltering ? filteredMoviesLoading : moviesLoading; // Combines loading into this var

  return (
    <div className="mx-30">
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : // Default State
      !isFiltering ? (
        <div className="grid grid-flow-row grid-cols-4 gap-20">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : // No Movies in filter
      filteredMovies.length === 0 ? (
        <Typography variant="h5" component="div" fontWeight="bold">
          No Movies Found...
        </Typography>
      ) : // Error
      filteredMoviesError ? (
        <Typography variant="h5" component="div" fontWeight="bold">
          There was an error trying to load the movies...
        </Typography>
      ) : (
        // Movies in filter
        <div className="grid grid-flow-row grid-cols-4 gap-20">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
