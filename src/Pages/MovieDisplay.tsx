import { useParams } from "react-router-dom";
import { useMovieById } from "../hook/useMovieById";
import { CircularProgress, Typography } from "@mui/material";
import { useMovieRecommendations } from "../hook/useMovieRecommendation";
import MovieSuggestion from "../components/organism/MovieSuggestion";
import DisplayMovieMain from "../components/organism/DisplayMovieMain";

export default function MovieDisplay() {
  const { id } = useParams<{ id: string }>();
  const { movie, loadingMovieBId } = useMovieById(Number(id!));
  const { movieRec, loadingMovieRec } = useMovieRecommendations(Number(id!));

  return (
    <div className="mx-3 flex flex-col">
      {loadingMovieBId ? (
        <div className="flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : movie === null ? (
        <div> movieNotFound</div>
      ) : (
        <DisplayMovieMain movie={movie} />
      )}
      <div className="flex flex-col rounded-xl bg-neutral-800 p-4">
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          Similar Movies
        </Typography>
        {/* <div className="flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={50} />
        </div> */}
        {loadingMovieRec ? (
          <div className="flex flex-1 items-center justify-center">
            <CircularProgress color="inherit" size={80} />
          </div>
        ) : movieRec.length === 0 ? (
          <Typography gutterBottom variant="body1" component="div">
            No recommendations found for this movie...
          </Typography>
        ) : (
          <ul className="mx-auto my-2 grid grid-flow-row grid-cols-6 gap-8 space-x-10">
            {movieRec.map((movie) => (
              <MovieSuggestion movie={movie} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
