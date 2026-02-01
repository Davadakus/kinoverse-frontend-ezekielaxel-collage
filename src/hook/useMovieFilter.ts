import { useState, useMemo } from "react";
import type { MovieEmotionsRecord, Emotion } from "../types/emotion.ts";
import { loadLocalStorage } from "../utils/localStorage.ts";

export function useMovieFilter(selectedEmotions: Emotion[]) {
  const [emotionRecord] = useState<MovieEmotionsRecord>(loadLocalStorage);

  const filteredIds = useMemo(() => {
    if (!selectedEmotions.length) {
      return null;
    }

    return Object.entries(emotionRecord)
      .filter(([_movieId, movieEmotionData]) =>
        selectedEmotions.some(
          (emotion) => (movieEmotionData.emotionCounts[emotion] ?? 0) > 0,
        ),
      )
      .map(([movieId]) => Number(movieId));
  }, [emotionRecord, selectedEmotions]);

  return filteredIds;
}
