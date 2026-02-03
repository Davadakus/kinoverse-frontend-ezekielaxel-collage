import { Card, CardContent, Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import { Link } from "react-router-dom";

import MovieImage from "../atoms/MovieImage";
import { formatYear } from "../../utils/releaseYear";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        bgcolor: "surface.foreground",
        transition: "background-color 0.3s",
        "&:hover": {
          bgcolor: "surface.hover",
        },
      }}
    >
      <Link
        to={`/movie/${movie.id}`}
        className="brightness-100 duration-300 hover:brightness-125"
      >
        <MovieImage movie={movie} />
        <CardContent>
          <Typography variant="h5" component="div" fontWeight="bold">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {formatYear(movie.release_date)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {movie.overview}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
