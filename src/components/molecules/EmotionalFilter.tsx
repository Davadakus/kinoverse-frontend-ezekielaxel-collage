import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import React from "react";
import Emoji from "../atoms/Emoji";

interface EmotionalFilterProps {
  className?: string;
}

const selectedStyle = {
  "&.Mui-selected": {
    bgcolor: "surface.hover",
  },
};

export default function EmotionalFilter({ className }: EmotionalFilterProps) {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (
    _event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <div className={className}>
      <div className="flex flex-col">
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ marginBlock: "auto" }}
        >
          Filter:
        </Typography>

        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
          sx={{ bgcolor: "surface.foreground", margin: 0.5 }}
        >
          {[
            { value: "happy", emoji: "😊" },
            { value: "sad", emoji: "😢" },
            { value: "mind-blown", emoji: "🤯" },
            { value: "cosy", emoji: "🕯️" },
            { value: "scary", emoji: "😨" },
            { value: "motivational", emoji: "💪" },
          ].map((item) => (
            <ToggleButton
              key={item.value}
              value={item.value}
              sx={selectedStyle}
            >
              <Emoji>{item.emoji}</Emoji>
            </ToggleButton>
          ))}
          {/* <ToggleButton value="happy" aria-label="happy" sx={selectedStyle}>
            <Emoji>😊</Emoji>
          </ToggleButton>
          <ToggleButton value="sad" aria-label="sad" sx={selectedStyle}>
            <Emoji>😢</Emoji>
          </ToggleButton>
          <ToggleButton
            value="mind-blown"
            aria-label="mind-blown"
            sx={selectedStyle}
          >
            <Emoji>🤯</Emoji>
          </ToggleButton>
          <ToggleButton value="cozy" aria-label="cozy" sx={selectedStyle}>
            <Emoji>🕯️</Emoji>
          </ToggleButton>
          <ToggleButton value="scary" aria-label="scary" sx={selectedStyle}>
            <Emoji>😨</Emoji>
          </ToggleButton>
          <ToggleButton
            value="motivational"
            aria-label="motivational"
            sx={selectedStyle}
          >
            <Emoji>💪</Emoji>
          </ToggleButton> */}
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
