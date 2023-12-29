import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import HistoryCard from "../../components/HistoryCard";

const index = ({ handleHistory }) => {
  return (
    <Box>
      <Header title={"History"} />
      <Box
        sx={{
          overflow: "auto",

          height: "80vh",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",

          // marginBottom: "3rem",
        }}
        onClick={handleHistory}
      >
        <HistoryCard />
      </Box>
    </Box>
  );
};

export default index;
