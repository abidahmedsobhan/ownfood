import React, { useEffect } from "react";
import { Box, Paper, IconButton, InputBase, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import "./custom_search.css";
const Custom_Search = () => {
  return (
    <Box className="searchBox">
      <Box display="flex" flexDirection="row">
        <Paper
          style={{ marginLeft: "8%", marginTop: 27 }}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 250,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Zip Code"
            inputProps={{ "aria-label": "Zip Code" }}
          />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <LocationOnIcon />
          </IconButton>
        </Paper>

        <Paper
          style={{ marginLeft: 1, marginTop: 27 }}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <LanguageIcon />
          </IconButton>
        </Paper>
        <Button variant="contained" style={{ marginLeft: "5%", marginTop: 27 }}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Custom_Search;
