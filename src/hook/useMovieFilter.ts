import { useState, useMemo } from "react";
import type { MovieEmotionsRecord, Emotion } from "../types/emotion.ts";

const STORAGE_KEY = "movieRecord";

function getInitialRecord(): MovieEmotionsRecord {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function useMovieFilter(selectedEmotions: Emotion[]) {
  const [emotionRecord] = useState<MovieEmotionsRecord>(getInitialRecord);

  const filteredIds = useMemo(() => {
    if (!selectedEmotions.length) {
      return null;
    }

    return Object.entries(emotionRecord)
      .filter(([_, movieEmotionData]) =>
        selectedEmotions.some(
          (emotion) => (movieEmotionData.emotionCounts[emotion] ?? 0) > 0,
        ),
      )
      .map(([movieId]) => Number(movieId));
  }, [emotionRecord, selectedEmotions]);

  return filteredIds;
}
