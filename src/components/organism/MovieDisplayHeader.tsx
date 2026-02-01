import { Button, Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import EmotionButtonStore from "../molecules/EmotionButtonStore";
import { useMovieEmotions } from "../../hook/useMovieEmotion";
import { useTopEmotionCount } from "../../hook/useTopEmotionCount";
import TopEmotionDisplay from "../molecules/TopEmotionDisplay";
import MovieImage from "../atoms/MovieImage";

import { formatYear } from "../../utils/releaseYear";
import BackButton from "../molecules/BackButton";

interface MovieDisplayHeaderProps {
  movie: Movie;
}

// Move to seperate file if used more than once

export default function MovieDisplayHeader({ movie }: MovieDisplayHeaderProps) {
  const { movieEmotion, setMovieEmotion } = useMovieEmotions(movie.id);
  const { sortedEmotion } = useTopEmotionCount(movieEmotion);

  return (
    <div className="flex flex-col bg-neutral-800/40 p-2 px-6">
      <div className="flex flex-row">
        <div className="w-40 xl:w-60 2xl:w-80">
          <BackButton />
          <MovieImage movie={movie} />
        </div>

        <div className="m-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bold"
            >
              {movie.title} {formatYear(movie.release_date)}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 900, marginRight: 5 }}>
              {movie.overview}
            </Typography>
          </div>
          <EmotionButtonStore
            type="rating"
            title="Rating:"
            className="flex"
            value={movieEmotion}
            onChange={setMovieEmotion}
          />
        </div>
      </div>
      <div className="w-40 xl:w-60 2xl:w-80">
        <TopEmotionDisplay value={sortedEmotion} />
      </div>
    </div>
  );
}
