import React from "react";

import { Box, Avatar, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ReplyIcon from "@mui/icons-material/Reply";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const logs = [
  {
    id: 1,
    title: "Card To Card",
    category: "Maria",
    amount: "+ $34.00",
    icon: <ReplyIcon />,
  },
  {
    id: 2,
    title: "Apple Music",
    category: "Online",
    amount: "- $21.00",
    icon: <MusicNoteIcon />,
  },
  {
    id: 3,
    title: "Uber",
    category: "Service",
    amount: "- $1221.00",
    icon: <DirectionsCarIcon />,
  },
  {
    id: 4,
    title: "Uber",
    category: "Service",
    amount: "- $2467.00",
    icon: <DirectionsCarIcon />,
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
                background:
                  "linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(12,10,12,1) 39%, rgba(43,65,98,1) 97%, rgba(0,212,255,1) 100%)",

                marginBottom: "1rem",
              }}
            >
              {log.icon}
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
                background:
                  "linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(12,10,12,1) 39%, rgba(43,65,98,1) 97%, rgba(0,212,255,1) 100%)",
                marginBottom: "1rem",
              }}
            >
              {log.icon}
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
