import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import React from "react";
import Emoji from "../atoms/Emoji";
import type { Emotion } from "../../types/emotion";

interface EmotionalFilterProps {
  className?: string;
  label: string;
  value?: Emotion[];
  onChange?: (userEmotion: Emotion[]) => void;
}

export default function EmotionalFilter({
  className,
  label,
  value,
  onChange,
}: EmotionalFilterProps) {
  // const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  // const handleFormat = (
  //   _event: React.MouseEvent<HTMLElement>,
  //   newFormats: string[],
  // ) => {
  //   setFormats(newFormats);
  // };

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newEmotions: Emotion[],
  ) => {
    onChange?.(newEmotions);
  };

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

        <ToggleButtonGroup
          value={value}
          onChange={handleChange}
          aria-label="text formatting"
          sx={{ bgcolor: "surface.foreground", margin: 0.5 }}
        >
          {[
            { value: "happy", emoji: "😊" },
            { value: "sad", emoji: "😢" },
            { value: "mindBlown", emoji: "🤯" },
            { value: "cozy", emoji: "🕯️" },
            { value: "scary", emoji: "😨" },
            { value: "motivational", emoji: "💪" },
          ].map((item) => (
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
      </div>
    </div>
  );
}
