import SearchAppBar from "./components/SearchAppBar";
import JobCart from "./components/JobCart";
import React from "react";
import { JobList } from "./data/JobList";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PaginationControlled from "./components/Pagination";
import Stack from "@mui/material/Stack";
import { Routes, Route } from "react-router-dom";
import { JobPage1 } from "./pages/JobPage1";
import { JobPage2 } from "./pages/JobPage2";
import { JobPage3 } from "./pages/JobPage3";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Divider />

      <Routes>
        <Route path="/page1" element={<JobPage1 />} />
        <Route path="/page2" element={<JobPage2 />} />
        <Route path="/page3" element={<JobPage3 />} />
      </Routes>

      <Stack alignItems="center">
        <PaginationControlled />
      </Stack>
    </div>
  );
}

export default App;
