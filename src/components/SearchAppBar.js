import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useContext, useEffect } from "react";
import { InputContext } from "../context/InputPrivider";
import { Modal, Button } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export default function SearchAppBar() {
  const [login, setLogIn] = useContext(InputContext);
  const handleClick = () => {
    if (login) {
      setLogIn(false);
    } else {
      setOpen(true);
    }
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Job List
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => handleClick()}
              >
                {login ? "Logout" : "Login"}
              </Button>
            </Stack>
          </Toolbar>
        </Stack>
        <>
          {login ? (
            <></>
          ) : (
            <>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="style2">
                  <Login />
                </Box>
              </Modal>
            </>
          )}
        </>
      </AppBar>
    </Box>
  );
}
