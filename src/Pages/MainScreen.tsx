import Title from "../components/atoms/Title";
import EmotionButtonStore from "../components/molecules/EmotionButtonStore";
import { useState } from "react";
import type { Emotion } from "../types/emotion";
import MovieGrid from "../components/template/MovieGrid";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AnimatedBackground from "../components/atoms/AnimatedBackground";
import MovingText from "../components/atoms/MovingText";

export default function MainScreen() {
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  return (
    <div className="flex h-screen flex-col">
      <AnimatedBackground />
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.1}>
          <Title title="KinoVerse" />
          <MovingText title="KinoVerse" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.18} speed={0.2}>
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
          <MovingText className="mt-10" title="KinoVerse" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
