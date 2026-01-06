import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import React from "react";
import Emoji from "../atoms/Emoji";

interface EmotionalFilterProps {
  className?: string;
  label: string;
}

export default function EmotionalFilter({
  className,
  label,
}: EmotionalFilterProps) {
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
          {label}
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
