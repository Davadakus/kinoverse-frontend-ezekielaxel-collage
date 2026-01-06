import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import { Link } from "react-router-dom";

interface MovieSuggestionProps {
  movie: Movie;
}

export default function MovieSuggestion({ movie }: MovieSuggestionProps) {
  return (
    <Card
      sx={{
        maxWidth: 220,
        border: 1,
        borderColor: "#e7e5e4",
        padding: 1,
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
        <CardMedia
          component="img"
          src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`}
          alt="movie suggestion"
          sx={{ maxHeight: 240 }}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
            fontWeight="bold"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            {movie.release_date.slice(0, 4)}
          </Typography>
          <Typography
            variant="caption"
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
