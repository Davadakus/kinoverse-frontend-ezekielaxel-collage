import { Typography } from "@mui/material";

interface MainScreenHeaderProps {
  title: string;
}

export default function Title({ title }: MainScreenHeaderProps) {
  return (
    //from-[var(--bg-default)] this syntax is apparently old and the one below is a simplified version offered by eslint
    <div className="mb-4 bg-linear-to-t from-(--bg-default) to-stone-800 pt-10 pb-5 text-center text-6xl">
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontFamily: "'Audiowide', sans-serif",
        }}
      >
        {title}
      </Typography>
    </div>
  );
}
