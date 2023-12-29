import React from "react";
import useSound from "use-sound";
import { Box, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import click from "../../assets/click.mp3";

const Index = ({ handleChange, value }) => {
  const [play] = useSound(click);
  const customHandle = (e, val) => {
    handleChange(e, val);
    play();
  };
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
        onClick={(e) => customHandle(e, "1")}
        sx={{
          color: "#fff",
          background:
            value === "1"
              ? "linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(12,10,12,1) 39%, rgba(43,65,98,1) 97%, rgba(0,212,255,1) 100%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <HomeIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        onClick={(e) => customHandle(e, "2")}
        sx={{
          color: "#fff",
          background:
            value === "2"
              ? "linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(12,10,12,1) 39%, rgba(43,65,98,1) 97%, rgba(0,212,255,1) 100%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <SpaceDashboardOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={(e) => customHandle(e, "3")}
        sx={{
          color: "#fff",
          background:
            value === "3"
              ? "linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(12,10,12,1) 39%, rgba(43,65,98,1) 97%, rgba(0,212,255,1) 100%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <HistoryOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={(e) => customHandle(e, "4")}
        sx={{
          color: "#fff",
          background:
            value === "4"
              ? "linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(12,10,12,1) 39%, rgba(43,65,98,1) 97%, rgba(0,212,255,1) 100%)"
              : "",
          width: "4rem",
          height: "4rem",
        }}
      >
        <MenuOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Index;
