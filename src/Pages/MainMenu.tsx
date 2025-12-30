export default function MainMenu() {
  async function fetchMovies() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const AccessKey = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
    // Need to segregate code here
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AccessKey}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=${apiKey}`,
      options,
    );

    const data = await response.json();
    console.log(data);
  }
  fetchMovies();

  return (
    <div className="flex h-screen w-screen flex-col justify-center bg-gray-700">
      <div className="bg-red-400/20 text-center">Functioning Code</div>
    </div>
  );
}
