import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import Emoji from "./Emoji";
import type { Emotion, MovieEmotionData } from "../../types/emotion";
import React from "react";
import type { EmotionOption } from "../../types/emotion";

interface EmotionalFilterBtnProps {
  emotionOptions: EmotionOption[];
  value?: Emotion[];
  onChange?: (userEmotion: Emotion[]) => void;
}

export default function EmotionalFilterBtn({
  value,
  emotionOptions,
  onChange,
}: EmotionalFilterBtnProps) {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newEmotions: Emotion[],
  ) => {
    onChange?.(newEmotions);
  };

  return (
    <ToggleButtonGroup
      value={value}
      onChange={handleChange}
      aria-label="Emotion Filter"
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
          <Emoji>{item.emoji}</Emoji>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
