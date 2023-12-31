import { Typography, Box, Avatar } from "@mui/material";
import React from "react";

import Carousel from "../../components/Carousel";
import man from "../../assets/man.png";

const First = ({ onClick, back }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
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
          <Avatar src={man} />
        </Box>
      </Box>
      <Carousel onClick={onClick} back={back} />

      {/* <img src={Card1} alt="card" style={{ width: "20rem" }} /> */}
    </Box>
  );
};

export default First;
