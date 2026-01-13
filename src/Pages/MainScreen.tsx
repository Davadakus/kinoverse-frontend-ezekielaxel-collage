import { useMovies } from "../hook/useMovies";
import MovieCard from "../components/organism/MovieCard";
import MainScreenHeader from "../components/molecules/MainScreenHeader";
import EmotionButtonStore from "../components/molecules/EmotionButtonStore";
import { useState } from "react";
import type { Emotion } from "../types/emotion";
import { useMovieFilter } from "../hook/useMovieFilter";
import { Box, CircularProgress } from "@mui/material";

export default function MainScreen() {
  const { movies, loading } = useMovies();
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  const filteredMovieIds = useMovieFilter(selectedEmotions);
  console.log("Filtered");
  console.log(filteredMovieIds);
  return (
    <div className="flex h-screen flex-col">
      <MainScreenHeader />
      <EmotionButtonStore
        type="filter"
        label="Filter:"
        className="mx-15 my-5 flex"
        value={selectedEmotions}
        onChange={setSelectedEmotions}
      />
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
    </div>
  );
}
