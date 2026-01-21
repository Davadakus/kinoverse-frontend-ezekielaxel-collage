import { useParams } from "react-router-dom";
import { useMovieById } from "../hook/useMovieById";
import { CircularProgress } from "@mui/material";
import MovieDisplayHeader from "../components/organism/MovieDisplayHeader";
import MovieRecommendation from "../components/organism/MovieRecommendation";
import Title from "../components/atoms/Title";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AnimatedBackground from "../components/atoms/AnimatedBackground";

export default function MovieDisplay() {
  const { id } = useParams<{ id: string }>();
  const { movie, loadingMovieBId } = useMovieById(Number(id!));

  return (
    <div className="flex flex-col">
      <AnimatedBackground />
      <Parallax pages={2} key={id} style={{ overflowX: "hidden" }}>
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <Title title="Movie Display" />
          {loadingMovieBId ? (
            <div className="my-20 flex flex-1 items-center justify-center">
              <CircularProgress color="inherit" size={80} />
            </div>
          ) : movie === null ? (
            <div> movieNotFound</div>
          ) : (
            <MovieDisplayHeader movie={movie} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1}>
          <MovieRecommendation id={id!} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
