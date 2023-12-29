import { Typography, Box, Avatar } from "@mui/material";
import React from "react";

import Carousel from "../../components/Carousel";

const First = ({ onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "34px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Bank
            <br />
            Cards
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.8)",
              fontWeight: "bold",
            }}
          >
            Balance
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              color: "rgba(255,255,255)",
              fontWeight: "bold",
            }}
          >
            $2,748.00
          </Typography>
        </Box>
        <Box>
          <Avatar>AB</Avatar>
        </Box>
      </Box>
      <Carousel onClick={onClick} />

      {/* <img src={Card1} alt="card" style={{ width: "20rem" }} /> */}
    </Box>
  );
};

export default First;
