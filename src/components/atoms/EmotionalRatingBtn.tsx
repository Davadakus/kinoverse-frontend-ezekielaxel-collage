import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import type {
  Emotion,
  EmotionOption,
  MovieEmotionData,
} from "../../types/emotion";
import Emoji from "./Emoji";

interface EmoRatingBtnProps {
  emotionOptions: EmotionOption[];
  value?: MovieEmotionData;
  onChange?: (userEmotion: Emotion[]) => void;
}

export default function EmotionalRatingBtn({
  value,
  onChange,
  emotionOptions,
}: EmoRatingBtnProps) {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newEmotions: Emotion[],
  ) => {
    onChange?.(newEmotions);
  };

  return (
    <ToggleButtonGroup
      value={value?.userEmotion}
      onChange={handleChange}
      aria-label="Emotion Rating"
      sx={{ bgcolor: "surface.foreground", margin: 0.5 }}
    >
      {emotionOptions.map((item) => (
        <ToggleButton
          key={item.value}
          value={item.value}
          sx={{
            "&.Mui-selected": {
              bgcolor: "surface.hover",
            },
          }}
        >
          <Emoji>
            {item.emoji} ({value?.emotionCounts[item.value as Emotion] ?? 0})
          </Emoji>
          <div> </div>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
