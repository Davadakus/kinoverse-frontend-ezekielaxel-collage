import type { Movie } from "../types/movie";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const AccessKey = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${AccessKey}`,
  },
};
// Returns list of Movies
export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=${apiKey}`,
    options,
  );

  const data = await response.json();
  console.log("Recommendation");
  console.log(data);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return data.results;
  // return response.json();
}

export async function getMovieById(id: number): Promise<Movie> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    options,
  );

  if (!response.ok) throw new Error("Failed to fetch movie");
  const data = await response.json();
  console.log("ById");
  console.log(data);
  return data;
}

export async function getMoviesByIds(ids: number[]): Promise<Movie[]> {
  return Promise.all(ids.map((id) => getMovieById(id)));
}

export async function getMovieRecommendation(id: number): Promise<Movie[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`,
    options,
  );

  if (!response.ok) throw new Error("Failed to fetch movie recommendations");
  const data = await response.json();
  console.log("Recommendation");
  console.log(data.results);
  return data.results;
}
