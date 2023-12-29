import { Typography, Box, Button } from "@mui/material";
import React, { useState, useEffect, useLayoutEffect } from "react";
import useSound from "use-sound";

import Card1 from "../../assets/card1.svg";
import CardBack from "../../assets/card-back.svg";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ReplyIcon from "@mui/icons-material/Reply";
import HistoryCard from "../../components/HistoryCard";

import flipSound from "../../assets/flip.wav";

// const styles={
//   left
// }

const Second = ({ onClick }) => {
  const [play] = useSound(flipSound);

  const [size, setSize] = useState(0);
  const [cardHeight, setCarHeight] = useState(25);
  const [flip, setFlip] = useState(false);
  const [load, setLoad] = useState(true);
  const [style, setStyle] = useState("");

  useLayoutEffect(() => {
    if (size === 1) {
      setStyle("midSize");
    }
    if (size === 2) {
      setStyle("largeSize");
    }
  }, [size]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 200);
  }, []);

  const handleHeight = () => {
    if (size === 0) {
      setCarHeight(35);
      setSize(1);
    }
    if (size === 1) {
      setCarHeight(85);
      setSize(2);
    }
    if (size === 2) {
      setCarHeight(25);
      setSize(0);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            color: "#fff",
            fontSize: "2rem",
          }}
          onClick={onClick}
        />
        {(size === 1 || size === 2) && (
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <Typography>Salary Card</Typography>
          </Box>
        )}
      </Box>
      {size === 0 && (
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Salary
              <br />
              Card
            </Typography>
          </Box>
        </Box>
      )}

      {/* {size !== 2 && ( */}
      <>
        <Box
          onClick={() => {
            setFlip((val) => !val);
            play();
          }}
        >
          {!flip ? (
            <img
              src={Card1}
              alt="card"
              style={{ width: "20rem" }}
              className={load && "rotate-horizontal"}
            />
          ) : (
            <img
              src={CardBack}
              alt="card"
              style={{ width: "20rem" }}
              className="fadeAnimation"
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.8)",
                fontWeight: "bold",
              }}
            >
              Balance
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                color: "rgba(255,255,255)",
                fontWeight: "bold",
              }}
            >
              $2,748.00
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                padding: "1rem",
                marginRight: "1rem",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.25)",
                borderRadius: ".75rem",
              }}
            >
              <HistoryOutlinedIcon />
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "1rem",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.25)",
                borderRadius: ".75rem",
              }}
            >
              <ReplyIcon />
            </Button>
          </Box>
        </Box>
      </>
      {/* )} */}
      <Box
        sx={{
          background: "linear-gradient(to right, #141e30, #243b55)",
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: `${cardHeight}vh`,
          // margin: "1rem",
          borderRadius: "3rem 3rem 0 0",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        className={style}
        onClick={handleHeight}
      >
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          <HistoryCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Second;
