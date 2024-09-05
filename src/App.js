import SearchAppBar from "./components/SearchAppBar";
import JobCart from "./components/JobCart";
import React from "react";
import { JobList } from "./data/JobList";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Divider />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {JobList.map((job) => (
          <Grid item xs={2}>
            <JobCart Job={job} key={job.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
