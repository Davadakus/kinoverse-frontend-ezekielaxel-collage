import Title from "../components/atoms/Title";
import EmotionButtonStore from "../components/molecules/EmotionButtonStore";
import { useState } from "react";
import type { Emotion } from "../types/emotion";
import MovieGrid from "../components/template/MovieGrid";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AnimatedBackground from "../components/atoms/AnimatedBackground";
import { Stack, Pagination } from "@mui/material";

export default function MainScreen() {
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);
  const [page, setPage] = useState(1);
  return (
    <div className="flex h-screen flex-col">
      <AnimatedBackground />
      <Parallax pages={3.3}>
        <ParallaxLayer offset={0} speed={0.1}>
          <Title title="KinoVerse" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.2}>
          <EmotionButtonStore
            type="filter"
            title="Filter:"
            className="mx-15 my-5 flex"
            value={selectedEmotions}
            onChange={setSelectedEmotions}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.4}>
          <MovieGrid selectedEmotions={selectedEmotions} />

          <Pagination
            className="flex justify-center align-middle"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#FFFFFF", // number color
                borderColor: "#FFFFFF", // outline color
              },
              "& .Mui-selected": {
                backgroundColor: "surface.hover",
                color: "#fff",
                borderColor: "#FFFFFF",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.1)",
              },

              // fontSize: "50",
            }}
            count={10}
            defaultPage={1}
            variant="outlined"
            shape="rounded"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
