import { useEffect, useState } from "react";
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

export function useMovieEmotions(movieId: number) {
  const [record, setRecord] = useState<MovieEmotionsRecord>(getInitialRecord);

  const movieData = record[movieId];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  }, [record]);

  function setMovieEmotion(userEmotion: Emotion[]) {
    setRecord((prev) => {
      const current = prev[movieId] ?? {
        emotionCounts: {
          happy: 0,
          sad: 0,
          mindBlown: 0,
          cozy: 0,
          scary: 0,
          motivational: 0,
        },
      };

      const prevEmotions = current.userEmotion ?? [];

      const added = userEmotion.filter((e) => !prevEmotions.includes(e));
      const removed = prevEmotions.filter((e) => !userEmotion.includes(e));

      const newCounts = { ...current.emotionCounts };

      for (const e of added) {
        newCounts[e] += 1;
      }

      for (const e of removed) {
        // newCounts[e] = Math.max(0, newCounts[e] - 1);
        newCounts[e] -= 1;
      }

      return {
        ...prev,
        [movieId]: {
          ...current,
          userEmotion: userEmotion,
          emotionCounts: newCounts,
        },
      };
    });
  }

  return {
    movieEmotion: movieData,
    setMovieEmotion,
  };
}
