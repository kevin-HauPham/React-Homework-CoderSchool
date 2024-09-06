import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

export default function JobCart({ Job }) {
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
      <Card sx={{ maxWidth: 400, height: 200 }}>
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
        </CardContent>
      </Card>
    </Stack>
  );
}
