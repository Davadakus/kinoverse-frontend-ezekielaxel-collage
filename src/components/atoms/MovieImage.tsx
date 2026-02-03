import { Box, Skeleton, CardMedia } from "@mui/material";
import { useState } from "react";
import type { Movie } from "../../types/movie";
import { getImage } from "../../utils/movieImage";

interface MovieImageProps {
  movie: Movie;
  size?: "w200" | "w500" | "original";
}

export default function MovieImage({ movie, size = "w500" }: MovieImageProps) {
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
        src={getImage(movie.poster_path, size)}
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
