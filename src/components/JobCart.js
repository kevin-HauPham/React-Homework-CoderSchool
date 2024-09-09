import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { useContext, useState } from "react";
import { InputContext } from "../context/InputPrivider";

import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
  Box,
  Modal,
} from "@mui/material";
import Login from "./Login";

export default function JobCart({ Job }) {
  const [login, setLogIn] = useContext(InputContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // eslint-disable-next-line no-unused-vars

  const CardStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    border: "1px solid black",
    width: "100%",
    maxWidth: "350px",
    minWidth: "270px",
    height: "320px",
    margin: "auto",
    backgroundColor: theme.palette.primary.light,
  }));
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      padding="5px"
    >
      <Card sx={{ maxWidth: 400, height: 250 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Job.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {Job.skills.slice(0, 4).map((skill, indext) => (
              <button key={indext}>{skill}</button>
            ))}
          </Typography>
          <Divider />
          <Button size="small">Job Details:</Button>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {Job.description}
          </Typography>
          <CardActions>
            <Stack position={"relative"}>
              <Button variant="contained" onClick={handleOpen}>
                Learn More
              </Button>
            </Stack>
            <>
              {login ? (
                <>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Stack>
                      <Box className="style1">
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          style={{ fontWeight: 700 }}
                        >
                          {Job.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {Job.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Modal>
                </>
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
          </CardActions>
        </CardContent>
      </Card>
    </Stack>
  );
}
