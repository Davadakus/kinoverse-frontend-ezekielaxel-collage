import { useMovies } from "../hook/useMovies";
import MovieCard from "../components/organism/MovieCard";
import MainScreenTitle from "../components/molecules/MainScreenTitle";

export default function MainScreen() {
  const { movies, loading } = useMovies();

  return (
    <div className="flex h-screen flex-col">
      <MainScreenTitle />
      <div className="mx-30">
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div className="grid grid-flow-row grid-cols-4 gap-20 text-white">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
