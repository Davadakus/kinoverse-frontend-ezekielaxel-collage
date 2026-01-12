import { Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import EmotionButtonStore from "../molecules/EmotionButtonStore";
import { useMovieEmotions } from "../../hook/useMovieEmotion";
import { useTopEmotionCount } from "../../hook/useTopEmotionCount";
import TopEmotionBtn from "../atoms/TopEmotionBtn";

interface DisplayMovieMainProps {
  movie: Movie;
}

export default function DisplayMovieMain({ movie }: DisplayMovieMainProps) {
  const { movieEmotion, setMovieEmotion } = useMovieEmotions(movie.id);
  const { sortedEmotion } = useTopEmotionCount(movieEmotion);
  console.log(sortedEmotion);
  return (
    <div className="flex p-5">
      <div className="flex flex-col">
        <img
          src={`https://media.themoviedb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="max-w-70"
        />
        <div className="flex flex-col"></div>
        <Typography variant="body1">Top Emotion: </Typography>
        <TopEmotionBtn value={sortedEmotion} />
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
