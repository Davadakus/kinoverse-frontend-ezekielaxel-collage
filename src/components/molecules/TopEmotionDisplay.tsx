import type { Emotion } from "../../types/emotion";
import Emoji from "../atoms/Emoji";
import { EMOTION_OPTIONS } from "../../types/emotion";
import { Typography } from "@mui/material";

interface TopEmotionDisplayProps {
  value?: [Emotion, number][];
}

export default function TopEmotionDisplay({ value }: TopEmotionDisplayProps) {
  if (!value || value.length === 0) return null;

  return (
    <div className="m-2 flex flex-col items-center rounded-xl bg-[#282828] p-2">
      <Typography variant="body1">Top Emotion: </Typography>
      <div className="flex flex-row gap-3">
        {value.map(([emotion, count]) => {
          const emojiItem = EMOTION_OPTIONS.find(
            (item) => item.value === emotion,
          );
          return (
            <div key={emotion} className="flex items-center gap-1">
              <Emoji>{emojiItem?.emoji}</Emoji>
              <span>({count})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
