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

export interface EmotionOption {
  value: Emotion;
  emoji: string;
}

export const EMOTION_OPTIONS: EmotionOption[] = [
  { value: "happy", emoji: "😊" },
  { value: "sad", emoji: "😢" },
  { value: "mindBlown", emoji: "🤯" },
  { value: "cozy", emoji: "🕯️" },
  { value: "scary", emoji: "😨" },
  { value: "motivational", emoji: "💪" },
];

export type EmotionalButtonType = "rating" | "filter";
