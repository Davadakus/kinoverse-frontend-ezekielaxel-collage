import { useState, useMemo } from "react";
import type { MovieEmotionsRecord, Emotion } from "../types/emotion.ts";
import { loadLocalStorage } from "../utils/localStorage.ts";

// This checks the database from localstorage to see any emotions that have a rating with the selected emotion and return a list of ID's from it
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
