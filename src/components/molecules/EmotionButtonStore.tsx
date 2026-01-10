import { Typography } from "@mui/material";
import type {
  Emotion,
  EmotionalButtonType,
  MovieEmotionData,
} from "../../types/emotion";
import EmotionalRatingBtn from "../atoms/EmotionalRatingBtn";
import EmotionalFilterBtn from "../atoms/EmotionalFilterBtn";
import { EMOTION_OPTIONS } from "../../types/emotion";

interface EmotionalButtonStoreProps {
  className?: string;
  label: string;
  value?: MovieEmotionData;
  onChange?: (userEmotion: Emotion[]) => void;
  type: EmotionalButtonType;
}

export default function EmotionalButtonStore({
  className,
  label,
  value,
  type,
  onChange,
}: EmotionalButtonStoreProps) {
  return (
    <div className={className}>
      <div className="flex flex-col">
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ marginBlock: "auto" }}
        >
          {label}
        </Typography>
        {type === "rating" ? (
          <EmotionalRatingBtn
            value={value}
            emotionOptions={EMOTION_OPTIONS}
            onChange={onChange}
          />
        ) : (
          <EmotionalFilterBtn emotionOptions={EMOTION_OPTIONS} />
        )}
      </div>
    </div>
  );
}
