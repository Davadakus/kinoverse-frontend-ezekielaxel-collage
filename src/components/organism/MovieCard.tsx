import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import type { Movie } from "../../types/movie";
import { Link } from "react-router-dom";

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
        bgcolor: "#1E1E1E",
        transition: "background-color 0.3s",
        "&:hover": {
          bgcolor: "rgb(40, 40, 40)",
        },
      }}
    >
      <Link
        to={`/movie/${movie.id}`}
        className="brightness-100 duration-300 hover:brightness-125"
      >
        <CardMedia
          component="img"
          height="140"
          src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`}
          alt="movie poster"
        />
        <CardContent>
          <Typography variant="h5" component="div" fontWeight="bold">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {movie.release_date.slice(0, 4)}
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
