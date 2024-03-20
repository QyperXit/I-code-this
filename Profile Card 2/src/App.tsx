import CreateIcon from "@mui/icons-material/Create";
import MoodIcon from "@mui/icons-material/Mood";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import MenuListComposition from "./CustomizedMenu";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Box
      component="section"
      sx={{
        p: 5,
        // border: "1px dashed grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Align items in the middle horizontally
        textAlign: "center",
        gap: 1,
        boxShadow: "0px 0px 10px 5px rgba(0,0,155,0.1)",
        borderRadius: 3,
        background: "#fff",
      }}
    >
      <Box sx={{ padding: 0, margin: 0 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
          sx={{ width: 100, height: 100, border: "10px solid lightgrey" }}
        />
      </Box>
      <Typography variant="h1" fontSize={22} style={{ fontWeight: 700 }}>
        Kim Candence
      </Typography>
      <Typography variant="subtitle1">UX Designer</Typography>
      <div
        style={{
          fontSize: 12,
          display: "flex",
          textAlign: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <div
          style={{
            border: "1px solid lightgrey",
            paddingInline: 9,
            fontWeight: 600,
            borderRadius: 5,
            margin: 0,
            width: 80,
            paddingBlock: 6,
          }}
          className="hover"
        >
          <Box sx={{ padding: 0, margin: 0 }}>
            <MoodIcon />
          </Box>

          <p
            style={{
              margin: 0,
            }}
          >
            Set a status
          </p>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            paddingInline: 9,
            fontWeight: 600,
            borderRadius: 5,
            width: 80,
            paddingBlock: 6,
          }}
          className="hover"
        >
          <p
            style={{
              margin: 0,
            }}
          >
            <Box sx={{ padding: 0, margin: 0 }}>
              <CreateIcon />
            </Box>
            Edit profile
          </p>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            paddingInline: 9,
            fontWeight: 600,
            borderRadius: 5,
            width: 80,
            paddingBlock: 6,
          }}
          className="hover"
        >
          <p
            style={{
              margin: 0,
            }}
          >
            <Box
              sx={{ padding: 0, margin: 0, position: "relative" }}
              onClick={handleClick}
            >
              <MoreHorizIcon />
              {isOpen && <MenuListComposition />}
            </Box>
            More
          </p>
        </div>
      </div>
    </Box>
  );
}

export default App;
