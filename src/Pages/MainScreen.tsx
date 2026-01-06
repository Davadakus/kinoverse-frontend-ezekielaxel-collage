import { useMovies } from "../hook/useMovies";
import MovieCard from "../components/organism/MovieCard";
import MainScreenHeader from "../components/molecules/MainScreenHeader";
import EmotionalFilter from "../components/molecules/EmotionalFilter";

export default function MainScreen() {
  const { movies, loading } = useMovies();

  return (
    <div className="flex h-screen flex-col">
      <MainScreenHeader />
      <EmotionalFilter label="Filter:" className="mx-15 my-5 flex" />
      <div className="mx-30">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-flow-row grid-cols-4 gap-20">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
