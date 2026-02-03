const TMDB_IMAGE_BASE = "https://media.themoviedb.org/t/p/";

export function getImage(path: string | null, size = "w500") {
  return `${TMDB_IMAGE_BASE}${size}${path}`;
}
