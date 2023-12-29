import React from "react";
import { Box } from "@mui/material";

import First from "./First";
import Second from "./Second";

import "./home.css";

const Home = ({ cardTab, setCardTab }) => {
  return (
    <Box>
      {cardTab === 0 ? (
        <First onClick={() => setCardTab(1)} />
      ) : (
        <Second onClick={() => setCardTab(0)} />
      )}
    </Box>
  );
};

export default Home;
