import React from "react";

import { Box, Avatar, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const logs = [
  {
    id: 1,
    title: "Card To Card",
    category: "Maria",
    amount: "+ $34.00",
  },
  {
    id: 2,
    title: "Apple Music",
    category: "Online",
    amount: "- $21.00",
  },
  {
    id: 3,
    title: "Uber",
    category: "Service",
    amount: "- $1221.00",
  },
  {
    id: 4,
    title: "Uber",
    category: "Service",
    amount: "- $2467.00",
  },
];
const index = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingBottom: "3rem",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            my: 2,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          20 April
        </Typography>
        {logs.map((log) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
              color: "#fff",
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
                <Typography sx={{ color: "#8fb0ce", fontSize: "16px" }}>
                  {log.category}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {log.amount}
              </Typography>
            </Box>
          </Box>
        ))}
        <Typography
          sx={{
            color: "#fff",
            my: 2,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          20 April
        </Typography>
        {[...logs].map((log) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
              color: "#fff",
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
                <Typography sx={{ color: "#8fb0ce", fontSize: "16px" }}>
                  {log.category}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {log.amount}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default index;
