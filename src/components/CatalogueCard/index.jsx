import React from "react";

import { Button, Box, Avatar, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const logs = [
  {
    id: 1,
    title: "Mobile",
    amount: "34.00",
  },
  {
    id: 2,
    title: "Internet and TV",
    amount: "21.00",
  },
  {
    id: 3,
    title: "Traffic and fines",
    amount: "1221.00",
  },
  {
    id: 4,
    title: "Housing Services",
    amount: "0.00",
  },
];
const index = () => {
  return logs.map((log) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      {/* <Box> */}
      <Avatar
        sx={{
          background: "linear-gradient(to bottom, #3f2b96, #a8c0ff)",
          marginBottom: "1rem",
        }}
      >
        <LocalPhoneIcon />
      </Avatar>
      {/* </Box> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "1rem",
          paddingBottom: "1rem",
          flex: 1,
          borderBottom: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        <Box sx={{ color: "#fff" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            {log.title}
          </Typography>
          <Typography sx={{ color: "#8fb0ce" }}>
            The debt is ${log.amount}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          disabled={Number(log.amount) === 0}
          sx={{
            "&:disabled": {
              color: "primary.main",
              opacity: "0.5",
              borderColor: "primary.main",
            },
          }}
        >
          Pay
        </Button>
      </Box>
    </Box>
  ));
};

export default index;
