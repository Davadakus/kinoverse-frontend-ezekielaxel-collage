import { Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import EmotionButtonStore from "../molecules/EmotionButtonStore";
import { useMovieEmotions } from "../../hook/useEmotionScore";

interface DisplayMovieMainProps {
  movie: Movie;
}

export default function DisplayMovieMain({ movie }: DisplayMovieMainProps) {
  const { movieEmotion, setMovieEmotion } = useMovieEmotions(movie.id);
  return (
    <div className="flex p-5">
      <div className="space-y-5">
        <img
          src={`https://media.themoviedb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="max-w-70"
        />
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
          <Typography variant="body1">{movie.overview}</Typography>
        </div>
        <EmotionButtonStore
          type="rating"
          label="Rating:"
          className="flex"
          value={movieEmotion}
          onChange={setMovieEmotion}
        />
      </div>
    </div>
  );
}
