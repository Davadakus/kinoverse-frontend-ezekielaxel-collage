import { Typography } from "@mui/material";

interface MainScreenHeaderProps {
  title: string;
  className?: string;
}

export default function MovingText({
  title,
  className,
}: MainScreenHeaderProps) {
  const REPEAT_COUNT = 20;
  return (
    <div className={`${className} w-full overflow-hidden whitespace-nowrap`}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          display: "inline-flex",
          gap: "2rem",
          fontFamily: "'Audiowide', sans-serif",
          animation: "marquee 15s linear infinite",
          bgcolor: "surface.hover",
        }}
      >
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <span key={i}>{title}</span>
        ))}
      </Typography>
    </div>
  );
}
