import type { Emotion } from "../../types/emotion";
import Emoji from "./Emoji";
import { EMOTION_OPTIONS } from "../../types/emotion";

interface EmoRatingBtnProps {
  value?: [Emotion, number][];
}

export default function TopEmotionBtn({ value }: EmoRatingBtnProps) {
  if (!value || value.length === 0) return null;

  return (
    <div className="flex gap-2 bg-[#282828]">
      {value.map(([emotion, count]) => {
        const emojiItem = EMOTION_OPTIONS.find(
          (item) => item.value === emotion,
        );

        return (
          <div key={emotion} className="flex items-center">
            <Emoji>{emojiItem?.emoji}</Emoji>
            <span>{count}</span>
          </div>
        );
      })}
    </div>
  );
}
