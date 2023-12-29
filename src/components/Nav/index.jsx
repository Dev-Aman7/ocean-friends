import React from "react";
import { Box, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const index = ({ handleChange, value }) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        // background: "#0F2027",/* fallback for old browsers */
        background: "linear-gradient(to right, #141e30, #243b55)",
        borderRadius: "3rem 3rem 0 0",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        // flex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <IconButton
        onClick={(e) => handleChange(e, "1")}
        sx={{
          color: "#fff",
          background:
            value === "1" ? "linear-gradient(to bottom, #3f2b96, #a8c0ff)" : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <HomeIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        onClick={(e) => handleChange(e, "2")}
        sx={{
          color: "#fff",
          background:
            value === "2" ? "linear-gradient(to bottom, #3f2b96, #a8c0ff)" : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <SpaceDashboardOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={(e) => handleChange(e, "3")}
        sx={{
          color: "#fff",
          background:
            value === "3" ? "linear-gradient(to bottom, #3f2b96, #a8c0ff)" : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <HistoryOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={(e) => handleChange(e, "4")}
        sx={{
          color: "#fff",
          background:
            value === "4" ? "linear-gradient(to bottom, #3f2b96, #a8c0ff)" : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <MenuOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default index;
