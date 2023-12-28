import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card1 from "../../assets/card3.svg";

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

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%", mt: "2rem" }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ width: "100%", padding: "1rem 0 1rem 0" }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img
            src={Card1}
            alt="card"
            style={{ width: "100%", transform: "rotate(90deg)" }}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img
            src={Card1}
            alt="card"
            style={{ width: "100%", transform: "rotate(90deg)" }}
          />
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
