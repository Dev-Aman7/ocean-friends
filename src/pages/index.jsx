import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Battery90Icon from "@mui/icons-material/Battery90";
import WifiIcon from "@mui/icons-material/Wifi";
import NetworkCellIcon from "@mui/icons-material/NetworkCell";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import Home from "./Home";

import "../styles/generic.css";

const Index = () => {
  // create tabs using mui
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "25rem",
        // padding: "1rem",
        paddingBottom: 0,
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#2b4162",
        backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 1rem",
        }}
      >
        <Typography sx={{ color: "white" }}>9:41</Typography>
        <Box>
          <Battery90Icon sx={{ color: "white" }} />
          <WifiIcon sx={{ color: "white" }} />
          <NetworkCellIcon sx={{ color: "white" }} />
        </Box>
      </Box>
      <TabContext value={value}>
        <TabPanel value="1">
          <Home />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
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
          }}
        >
          <IconButton
            onClick={(e) => handleChange(e, "1")}
            sx={{
              color: "#fff",
              background: "linear-gradient(to bottom, #3f2b96, #a8c0ff)",
              width: "4rem",
              height: "4rem",
            }}
          >
            <HomeIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <IconButton onClick={(e) => handleChange(e, "2")}>
            <HomeIcon />
          </IconButton>
          <IconButton onClick={(e) => handleChange(e, "3")}>
            <HomeIcon />
          </IconButton>
          <IconButton onClick={(e) => handleChange(e, "4")}>
            <HomeIcon />
          </IconButton>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Index;
