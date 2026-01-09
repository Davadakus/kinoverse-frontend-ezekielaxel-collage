export type Emotion =
  | "happy"
  | "sad"
  | "mindBlown"
  | "cozy"
  | "scary"
  | "motivational";

export interface MovieEmotionData {
  emotionCounts: Record<Emotion, number>;
  userEmotion?: Emotion[];
}

export type MovieEmotionsRecord = Record<number, MovieEmotionData>;
