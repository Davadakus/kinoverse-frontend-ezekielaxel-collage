import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIosNewIcon />}
      color="inherit"
      sx={{
        marginBottom: 1,
        "&:hover": {
          bgcolor: "surface.hover",
        },
      }}
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
}
