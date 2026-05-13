import Title from "../components/atoms/Title";
import EmotionButtonStore from "../components/molecules/EmotionButtonStore";
import { useEffect, useState } from "react";
import type { Emotion } from "../types/emotion";
import MovieGrid from "../components/template/MovieGrid";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AnimatedBackground from "../components/atoms/AnimatedBackground";
import {
  Box,
  CircularProgress,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";
import { useMoviesByIds } from "../hook/useMovieByIds";
import { useMovieFilter } from "../hook/useMovieFilter";
import { useMovies } from "../hook/useMovies";
import SearchBar from "../components/molecules/SearchBar";
import type { SortOrder } from "../types/sortOrder";

export default function MainScreen() {
  const moviePerPage = 10;
  const [page, setPage] = useState(1);

  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  const { movies, moviesLoading } = useMovies();
  const filteredMovieIds = useMovieFilter(selectedEmotions);
  const isFiltering = filteredMovieIds !== null; // False if null so it display ALL movies

  const { filteredMovies, filteredMoviesLoading, filteredMoviesError } =
    useMoviesByIds(filteredMovieIds);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("az");
  const isLoading = isFiltering ? filteredMoviesLoading : moviesLoading;

  // Filtering
  var allMovies = isFiltering ? filteredMovies : movies;

  // Search
  if (searchQuery) {
    allMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // Sort
  allMovies = [...allMovies].sort((a, b) => {
    if (sortOrder === "newest")
      return b.release_date.localeCompare(a.release_date);
    if (sortOrder === "oldest")
      return a.release_date.localeCompare(b.release_date);
    return a.title.localeCompare(b.title);
  });

  const startIndex = (page - 1) * moviePerPage;
  const endIndex = startIndex + moviePerPage;

  // Decide which list to use for rendering
  const moviesToRender = isFiltering
    ? filteredMovies.slice(startIndex, endIndex)
    : movies.slice(startIndex, endIndex);

  useEffect(() => {
    setPage(1);
  }, [selectedEmotions]);

  const totalPages = Math.ceil(allMovies.length / moviePerPage);

  const start = (page - 1) * moviePerPage;
  const paginatedMovies = allMovies.slice(start, start + moviePerPage);

  return (
    <div className="flex h-screen flex-col">
      {/* <AnimatedBackground /> */}
      {/* <Parallax pages={3.3}> */}
      {/* <ParallaxLayer offset={0.05} speed={0.1}> */}
      <Title title="KinoVerse" />
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={0.2} speed={0.2}> */}
      <div className="my-2 grid grid-cols-3 items-end">
        <EmotionButtonStore
          type="filter"
          title="Filter:"
          className="mx-15 flex"
          value={selectedEmotions}
          onChange={setSelectedEmotions}
        />
        <div className="absolute left-1/2 -translate-x-1/2">
          <SearchBar onSearch={setSearchQuery} onSort={setSortOrder} />
        </div>
      </div>
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={0.35} speed={0.4}> */}

      {isLoading ? (
        <div className="my-20 flex flex-1 items-center justify-center">
          <CircularProgress color="inherit" size={80} />
        </div>
      ) : (
        <MovieGrid movies={paginatedMovies} isLoading={isLoading} />
      )}

      <Pagination
        className="flex justify-center py-10 align-middle"
        onChange={(_, value) => setPage(value)}
        size="large"
        count={totalPages}
        defaultPage={1}
        page={page}
        variant="outlined"
        shape="rounded"
        sx={(theme) => ({
          "& .MuiPaginationItem-root": {
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: theme.palette.surface.selected,
            borderColor: "#FFFFFF",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: theme.palette.surface.hover,
          },
        })}
      />
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
    </div>
  );
}
