import { useMovies } from "../hook/useMovies";

export default function MainMenu() {
  const { movies, loading } = useMovies();

  return (
    <div className="flex h-screen w-screen flex-col bg-gray-700">
      <div className="mx-10 my-5 border-2 border-stone-600 p-6 text-center text-6xl">
        Header
      </div>

      <div className="mx-10">
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div className="grid grid-flow-row grid-cols-3 bg-red-400/20 text-white">
            {movies.map((movie) => (
              <div key={movie.id}>
                {/* {movie.poster_path} */}
                {movie.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
