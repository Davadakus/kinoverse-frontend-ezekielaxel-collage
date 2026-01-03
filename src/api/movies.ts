import type { Movie } from "../types/movie";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const AccessKey = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

console.log(apiKey);
console.log(AccessKey);
console.log(import.meta.env);
// Returns list of Movies
export async function fetchMovies(): Promise<Movie[]> {
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

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return data.results;
  // return response.json();
}
