import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function JobCart({ Job }) {
  return (
    <Card sx={{ maxWidth: 400, height: 270 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Job.title}
        </Typography>
        <Button size="small">Job Details:</Button>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {Job.description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Salary Range: {Job.salaryHigh} - {Job.salaryLow}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
