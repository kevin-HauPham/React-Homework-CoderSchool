import SearchAppBar from "./components/SearchAppBar";
import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Routes, Route } from "react-router-dom";
import { JobPage1 } from "./pages/JobPage1";
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
