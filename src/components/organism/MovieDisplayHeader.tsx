import { Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import EmotionButtonStore from "../molecules/EmotionButtonStore";
import { useMovieEmotions } from "../../hook/useMovieEmotion";
import { useTopEmotionCount } from "../../hook/useTopEmotionCount";
import TopEmotionDisplay from "../molecules/TopEmotionDisplay";
import MovieImage from "../atoms/MovieImage";

interface MovieDisplayHeaderProps {
  movie: Movie;
}

export default function MovieDisplayHeader({ movie }: MovieDisplayHeaderProps) {
  const { movieEmotion, setMovieEmotion } = useMovieEmotions(movie.id);
  const { sortedEmotion } = useTopEmotionCount(movieEmotion);

  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-row">
        <div className="w-100">
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
              {movie.title} ({movie.release_date.slice(0, 4)})
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
      <div className="w-100">
        <TopEmotionDisplay value={sortedEmotion} />
      </div>
    </div>
  );
}
