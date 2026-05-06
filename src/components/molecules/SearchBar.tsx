import {
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import React from "react";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import SortIcon from "@mui/icons-material/Sort";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [name, setName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(name);
    }, 300);

    return () => clearTimeout(timer);
  }, [name, onSearch]);

  return (
    <div className="flex flex-row items-center">
      <PopupState variant="popover" popupId="popup-menu">
        {(popupState) => (
          <div>
            <Button
              variant="contained"
              sx={{
                height: 55,
              }}
              {...bindTrigger(popupState)}
            >
              <SortIcon />
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Newest</MenuItem>
              <MenuItem onClick={popupState.close}>Oldest</MenuItem>
              <MenuItem onClick={popupState.close}>A-Z</MenuItem>
            </Menu>
          </div>
        )}
      </PopupState>

      <TextField
        fullWidth
        label="Search"
        id="search-bar"
        value={name}
        onChange={(e) => setName(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black", // Text color needs to be dark to be visible
                    "&:hover": {
                      backgroundColor: "#f5f5f5", // Slight grey on hover so it feels interactive
                    },
                  }}
                >
                  <SearchIcon sx={{ fontSize: 30 }} />
                </Button>
              </InputAdornment>
            ),
          },
        }}
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
          width: 300,
        }}
      />
    </div>
  );
}
