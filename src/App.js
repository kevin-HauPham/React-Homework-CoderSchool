import SearchAppBar from "./components/SearchAppBar";
import React from "react";
import Divider from "@mui/material/Divider";
import PaginationControlled from "./components/PaginationControlled";
import Stack from "@mui/material/Stack";
import { Routes, Route } from "react-router-dom";
import { JobPage1 } from "./pages/JobPage1";
import { JobPage2 } from "./pages/JobPage2";
import { JobPage3 } from "./pages/JobPage3";
import NotificationsSignInPageError from "./components/NotificationsSignInPageError";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Divider />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <JobPage1 />
            </>
          }
        />
        <Route path="/signin" element={<NotificationsSignInPageError />} />
      </Routes>
    </div>
  );
}

export default App;
