import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import swoop from "../../assets/swoop.mp3";
import useSound from "use-sound";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card1 from "../../assets/card1.svg";
import Card2 from "../../assets/card2.svg";

import "./carousel.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FullWidthTabs({ onClick, back }) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [play] = useSound(swoop);
  const [style, setStyle] = useState("");

  useEffect(() => {
    console.log(back);
    if (back) {
      setStyle("rotate-vertical");
      setTimeout(() => {
        setStyle("");
      }, 200);
    }
  }, [back]);

  const handleChange = (newValue) => {
    play();
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: "2rem",
        overflow: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{
          width: "100%",
          padding: "1rem 0 1rem 0",
          overflow: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          onClick={onClick}
          sx={{
            overflow: "hidden",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          <img
            src={Card1}
            alt="card"
            style={{ transform: "rotate(270deg)" }}
            className={style}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          onClick={onClick}
        >
          <img src={Card2} alt="card" style={{ transform: "rotate(270deg)" }} />
        </TabPanel>
      </SwipeableViews>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          "&>div": {
            margin: ".25rem",
          },
        }}
      >
        <div
          onClick={() => handleChange(0)}
          className={
            value === 0
              ? ["button", "active"].join(" ")
              : ["button", "inactive"].join(" ")
          }
        />
        <div
          onClick={() => handleChange(1)}
          className={
            value === 1
              ? ["button", "active"].join(" ")
              : ["button", "inactive"].join(" ")
          }
        />
      </Box>
    </Box>
  );
}
