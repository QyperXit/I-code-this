// import Button from "@mui/material/Button";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
// import * as React from "react";

export default function MenuListComposition() {
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef<HTMLButtonElement>(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event: Event | React.SyntheticEvent) => {
  //   if (
  //     anchorRef.current &&
  //     anchorRef.current.contains(event.target as HTMLElement)
  //   ) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event: React.KeyboardEvent) {
  //   if (event.key === "Tab") {
  //     event.preventDefault();
  //     setOpen(false);
  //   } else if (event.key === "Escape") {
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current!.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ position: "absolute", left: 120, borderRadius: 45, top: -50 }}
    >
      <Paper
        sx={{ borderRadius: 2, color: "#fff", backgroundColor: "#130C35" }}
      >
        <MenuList>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            Login
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            Join
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            Change Language
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            image & Video API
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            Apps & Plugins
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            Partnerships
          </MenuItem>
          <MenuItem
            sx={{
              backgroundColor: "#130C35",
              "&:hover": {
                backgroundColor: "#2D255B",
              },
            }}
          >
            Inprint & Terms
          </MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
