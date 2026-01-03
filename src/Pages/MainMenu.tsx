import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useMovies } from "../hook/useMovies";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const { movies, loading } = useMovies();

  return (
    <div className="flex max-h-max w-screen flex-col">
      <div className="mx-10 my-5 border-2 border-stone-600 p-6 text-center text-6xl">
        Header
      </div>

      <div className="mx-10">
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div className="grid grid-flow-row grid-cols-4 gap-30 text-white">
            {movies.map((movie) => (
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
                <Link to="/test">
                  <CardMedia
                    component="img"
                    height="140"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt="movie poster"
                    sx={{
                      transition: "filter 0.3s",
                      "&:hover": {
                        filter: "brightness(50%)",
                      },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2">{movie.overview}</Typography>
                  </CardContent>
                </Link>
              </Card>

              // <div className="grid grid-flow-row grid-cols-4 gap-30 text-white">
              //   {movies.map((movie) => (
              //     <div
              //       className="flex flex-col text-center align-middle"
              //       key={movie.id}
              //     >
              //       <img
              //         src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              //         className=""
              //         alt="art"
              //       />
              //       <div className="">
              //         <div className="m-5 text-2xl">{movie.title}</div>
              //         <div className="mx-3">{movie.overview}</div>
              //       </div>
              //     </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
