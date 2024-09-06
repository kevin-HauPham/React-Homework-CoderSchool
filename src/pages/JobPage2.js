import React from "react";
import Grid from "@mui/material/Grid";
import JobCart from "../components/JobCart";
import { JobList } from "../data/JobList";
import Stack from "@mui/material/Stack";

export function JobPage2() {
  return (
    <div>
      <Stack marginTop={2}>
        <Grid container spacing={2}>
          {JobList.slice(5, 10).map((job) => (
            <Grid item xs={12} md={6} lg={4} rowSpacing={10} key={job.id}>
              <JobCart Job={job} key={job.id} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}
