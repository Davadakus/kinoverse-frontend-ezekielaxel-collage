import { useState, useMemo } from "react";
import type { MovieEmotionsRecord, Emotion } from "../types/emotion.ts";

const storageKey = import.meta.env.VITE_STORAGE_KEY;

function getInitialRecord(): MovieEmotionsRecord {
  const raw = localStorage.getItem(storageKey);
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
