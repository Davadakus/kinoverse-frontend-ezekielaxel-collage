import { Button, Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import EmotionButtonStore from "../molecules/EmotionButtonStore";
import { useMovieEmotions } from "../../hook/useMovieEmotion";
import { useTopEmotionCount } from "../../hook/useTopEmotionCount";
import TopEmotionDisplay from "../molecules/TopEmotionDisplay";
import MovieImage from "../atoms/MovieImage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

interface MovieDisplayHeaderProps {
  movie: Movie;
}

export default function MovieDisplayHeader({ movie }: MovieDisplayHeaderProps) {
  const { movieEmotion, setMovieEmotion } = useMovieEmotions(movie.id);
  const { sortedEmotion } = useTopEmotionCount(movieEmotion);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-neutral-800/40 p-2 px-6">
      <div className="flex flex-row">
        <div className="w-40 xl:w-60 2xl:w-80">
          <Button
            startIcon={<ArrowBackIosNewIcon />}
            color="inherit"
            sx={{
              marginBottom: 1,
              "&:hover": {
                bgcolor: "surface.hover",
              },
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
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
      <div className="w-40 xl:w-60 2xl:w-80">
        <TopEmotionDisplay value={sortedEmotion} />
      </div>
    </div>
  );
}
