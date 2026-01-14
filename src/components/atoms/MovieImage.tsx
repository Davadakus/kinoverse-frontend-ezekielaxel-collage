import { Box, Skeleton, CardMedia } from "@mui/material";
import { useState } from "react";
import type { Movie } from "../../types/movie";

interface MovieImageProps {
  movie: Movie;
}

export default function MovieImage({ movie }: MovieImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "2 / 3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}

      <CardMedia
        component="img"
        src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`}
        alt="movie poster"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
