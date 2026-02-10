export function createMovieMock(overrides = {}) {
  return {
    id: 1,
    title: "My Movie",
    overview: "This is a test movie.",
    poster_path: null,
    release_date: "2023-01-01",
    ...overrides, // allow overriding specific fields if needed
  };
}
