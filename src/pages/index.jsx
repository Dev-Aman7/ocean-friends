import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Battery90Icon from "@mui/icons-material/Battery90";
import WifiIcon from "@mui/icons-material/Wifi";
import NetworkCellIcon from "@mui/icons-material/NetworkCell";
import Nav from "../components/Nav";
import Home from "./Home";
import History from "./History";
import Catalogue from "./Catalogue";

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
        height: "100vh",
        position: "relative",
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
        <TabPanel value="2">
          <Catalogue />
        </TabPanel>
        <TabPanel value="3" sx={{ flex: 1, overflow: "auto" }}>
          <History />
        </TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
      <Nav handleChange={handleChange} value={value} />
    </Box>
  );
};

export default Index;
