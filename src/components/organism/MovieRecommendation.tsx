import { Typography, CircularProgress } from "@mui/material";
import MovieSuggestion from "../molecules/MovieSuggestion";
import { useMovieRecommendations } from "../../hook/useMovieRecommendation";

interface MovieRecommendationProps {
  id: string;
}
export default function MovieRecommendation({ id }: MovieRecommendationProps) {
  const { movieRec, movieRecLoading, movieRecError } = useMovieRecommendations(
    Number(id),
  );

  return (
    <div className="flex flex-col rounded-xl bg-neutral-800/90 p-4">
      <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
        Similar Movies
      </Typography>
      {movieRecLoading ? ( // Loading State
        <div className="my-20 flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : movieRec.length === 0 ? ( // Empty Return
        <Typography gutterBottom variant="body1" component="div">
          No recommendations found for this movie...
        </Typography>
      ) : movieRecError ? ( // Error fetching recommendation
        <Typography gutterBottom variant="body1" component="div">
          There is an error fetching recommendations for this movie...
        </Typography>
      ) : (
        // Default State
        <ul className="mx-auto my-2 grid grid-flow-row grid-cols-6 gap-8 space-x-10">
          {movieRec.map((movie) => (
            <MovieSuggestion key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}
