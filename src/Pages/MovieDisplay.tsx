import { useParams } from "react-router-dom";
import { useMovieById } from "../hook/useMovieById";
import { Typography } from "@mui/material";
import MovieCard from "../components/organism/MovieCard";
import MovieSuggestion from "../components/organism/MovieSuggestion";
import EmotionalFilter from "../components/molecules/EmotionalFilter";

export default function MovieDisplay() {
  const { id } = useParams<{ id: string }>();
  const { movie, loading } = useMovieById(Number(id!));

  if (loading) return <div>Movie loading</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="mx-3">
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
          <EmotionalFilter label="Rating:" className="flex" />
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-800 p-4">
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          Similar Movies
        </Typography>
        <ul className="mx-10 my-2 grid grid-flow-row grid-cols-6 gap-10">
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          {/* <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li>
          <li>
            <MovieSuggestion movie={movie} />
          </li> */}
        </ul>
      </div>
    </div>
  );
}
