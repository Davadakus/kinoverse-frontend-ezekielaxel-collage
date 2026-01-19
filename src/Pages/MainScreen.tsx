import Title from "../components/atoms/Title";
import EmotionButtonStore from "../components/molecules/EmotionButtonStore";
import { useState } from "react";
import type { Emotion } from "../types/emotion";
import MovieGrid from "../components/template/MovieGrid";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function MainScreen() {
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  return (
    <div className="flex h-screen flex-col">
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.1}>
          <Title title="Kinoverse" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.15} speed={0.2}>
          <EmotionButtonStore
            type="filter"
            title="Filter:"
            className="mx-15 my-5 flex"
            value={selectedEmotions}
            onChange={setSelectedEmotions}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.4}>
          <MovieGrid selectedEmotions={selectedEmotions} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
