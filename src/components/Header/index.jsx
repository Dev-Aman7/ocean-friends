import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

import man from "../../assets/man.png";

const Header = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "38px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Avatar src={man} />
    </Box>
  );
};

export default Header;
