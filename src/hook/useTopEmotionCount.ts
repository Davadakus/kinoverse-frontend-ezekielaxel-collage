import { useMemo } from "react";
import type { Emotion, MovieEmotionData } from "../types/emotion.ts";
import { __unsafe_useEmotionCache } from "@emotion/react";

export function useTopEmotionCount(movieEmotion: MovieEmotionData) {
  const sortedEmotion = useMemo<[Emotion, number][]>(() => {
    if (!movieEmotion) return [];

    return (Object.entries(movieEmotion.emotionCounts) as [Emotion, number][])
      .filter(([, count]) => count > 0)
      .sort(
        ([, countA], [, countB]) => countB - countA, // highest first
      )
      .slice(0, 3);
  }, [movieEmotion]);

  return { sortedEmotion };
}
