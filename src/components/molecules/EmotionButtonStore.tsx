import { Typography } from "@mui/material";
import type { Emotion, MovieEmotionData } from "../../types/emotion";
import EmotionalRatingBtn from "../atoms/EmotionalRatingBtn";
import EmotionalFilterBtn from "../atoms/EmotionalFilterBtn";
import { EMOTION_OPTIONS } from "../../types/emotion";

interface BaseProps {
  className?: string;
  label: string;
  onChange?: (userEmotion: Emotion[]) => void;
}

interface RatingProps extends BaseProps {
  type: "rating";
  value?: MovieEmotionData;
}

interface FilterProps extends BaseProps {
  type: "filter";
  value?: Emotion[];
}

type EmotionalButtonStoreProps = RatingProps | FilterProps;

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
          <EmotionalFilterBtn
            value={value}
            emotionOptions={EMOTION_OPTIONS}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}
