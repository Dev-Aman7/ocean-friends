import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

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
      <Avatar>AB</Avatar>
    </Box>
  );
};

export default Header;
