import Title from "../components/atoms/Title";
import EmotionButtonStore from "../components/molecules/EmotionButtonStore";
import { useState } from "react";
import type { Emotion } from "../types/emotion";
import MovieGrid from "../components/template/MovieGrid";

export default function MainScreen() {
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  return (
    <div className="flex h-screen flex-col">
      <Title title="Kinoverse" />
      <EmotionButtonStore
        type="filter"
        title="Filter:"
        className="mx-15 my-5 flex"
        value={selectedEmotions}
        onChange={setSelectedEmotions}
      />
      <MovieGrid selectedEmotions={selectedEmotions} />
    </div>
  );
}
