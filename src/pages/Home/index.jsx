import React, { useState } from "react";
import useSound from "use-sound";
import { Box } from "@mui/material";

import First from "./First";
import Second from "./Second";

import woosh from "../../assets/woosh.mp3";

import "./home.css";

const Home = ({ cardTab, setCardTab }) => {
  const [play] = useSound(woosh);

  const [back, setBack] = useState(false);
  return (
    <Box>
      {cardTab === 0 ? (
        <First
          onClick={() => {
            setBack(false);
            play();
            setCardTab(1);
          }}
          back={back}
        />
      ) : (
        <Second
          onClick={() => {
            setBack(true);
            play();
            setCardTab(0);
          }}
        />
      )}
    </Box>
  );
};

export default Home;
