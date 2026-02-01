import { Typography } from "@mui/material";
import Title from "../components/atoms/Title";
import { Button } from "@mui/material";

import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate(); // must be inside component
  console.error(error);

  return (
    <div className="flex h-screen flex-col text-center">
      <Title title="Page Not Found" />
      <Typography variant="h5" component="div">
        Hmm thats odd... seems like you entered an invalid page. Please make
        sure you entered a valid path...
      </Typography>
      <div className="mx-auto my-10 flex">
        <Button
          color="inherit"
          sx={{
            fontSize: "2rem",
            padding: "12px 32px",
            marginBottom: 1,
            "&:hover": {
              bgcolor: "surface.hover",
            },
          }}
          onClick={() => navigate("/")}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
