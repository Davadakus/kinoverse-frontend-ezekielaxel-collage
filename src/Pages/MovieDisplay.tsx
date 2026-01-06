import { useParams } from "react-router-dom";
import { useMovieById } from "../hook/useMovieById";
import { Typography } from "@mui/material";
import EmotionalFilter from "../components/molecules/EmotionalFilter";
import { useMovieRecommendations } from "../hook/useMovieRecommendation";
import MovieSuggestion from "../components/organism/MovieSuggestion";
import DisplayMovieMain from "../components/organism/DisplayMovieMain";

export default function MovieDisplay() {
  const { id } = useParams<{ id: string }>();
  const { movie, loadingMovieBId } = useMovieById(Number(id!));
  const { movieRec, loadingMovieRec } = useMovieRecommendations(Number(id!));

  if (loadingMovieBId) return <div>Movie loading</div>;
  if (!movie) return <div>Movie not found</div>;
  if (loadingMovieRec) return <div>MovieRec loading</div>;
  if (!movieRec) return <div>MovieRec not found</div>;

  return (
    <div className="mx-3">
      <DisplayMovieMain movie={movie} />
      <div className="flex flex-col rounded-xl bg-neutral-800 p-4">
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          Similar Movies
        </Typography>
        <ul className="mx-auto my-2 grid grid-flow-row grid-cols-6 gap-8 space-x-10">
          {movieRec.map((movie) => (
            <MovieSuggestion movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
