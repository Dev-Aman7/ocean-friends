import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import HistoryCard from "../../components/HistoryCard";

const index = () => {
  return (
    <Box>
      <Header title={"History"} />
      <HistoryCard />
    </Box>
  );
};

export default index;
