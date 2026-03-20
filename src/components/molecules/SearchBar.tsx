import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className="mt-auto flex flex-row items-center">
      <SearchIcon sx={{ fontSize: 30 }} />
      <TextField
        fullWidth
        label="Search"
        id="search-bar"
        sx={{
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& label": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              color: "white",
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "yellow",
            },
            "&:hover": {
              bgcolor: "surface.hover",
            },
            "&.Mui-focused fieldset": {
              color: "white",
              borderColor: "yellow",
            },
          },
          color: "white",
        }}
      />
    </div>
  );
}
