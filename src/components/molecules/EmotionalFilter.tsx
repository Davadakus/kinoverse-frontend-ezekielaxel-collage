import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";

import React from "react";
import Emoji from "../atoms/Emoji";

export default function EmotionalFilter() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <div className="mx-15 my-5 flex">
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
          sx={{ bgcolor: "surface.foreground", gap: 1, margin: 0.5 }}
        >
          <ToggleButton value="happy" aria-label="bold">
            <Emoji>😊</Emoji>
          </ToggleButton>
          <ToggleButton value="sad" aria-label="italic">
            <Emoji>😢</Emoji>
          </ToggleButton>
          <ToggleButton value="mind-blown" aria-label="underlined">
            <Emoji>🤯</Emoji>
          </ToggleButton>
          <ToggleButton value="cosy" aria-label="underlined">
            <Emoji>🕯️</Emoji>
          </ToggleButton>
          <ToggleButton value="scary" aria-label="underlined">
            <Emoji>😨</Emoji>
          </ToggleButton>
          <ToggleButton value="motivational" aria-label="underlined">
            <Emoji>💪</Emoji>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
