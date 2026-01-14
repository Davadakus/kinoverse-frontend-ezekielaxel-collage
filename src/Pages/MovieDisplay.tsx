import { useParams } from "react-router-dom";
import { useMovieById } from "../hook/useMovieById";
import { CircularProgress } from "@mui/material";
import MovieDisplayHeader from "../components/organism/MovieDisplayHeader";
import MovieRecommendation from "../components/organism/MovieRecommendation";
import Title from "../components/atoms/Title";

export default function MovieDisplay() {
  const { id } = useParams<{ id: string }>();
  const { movie, loadingMovieBId } = useMovieById(Number(id!));

  return (
    <div className="mx-3 flex flex-col">
      <Title title="Movie Display" />
      {loadingMovieBId ? (
        <div className="my-20 flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : movie === null ? (
        <div> movieNotFound</div>
      ) : (
        <MovieDisplayHeader movie={movie} />
      )}
      <MovieRecommendation id={id!} />
    </div>
  );
}
