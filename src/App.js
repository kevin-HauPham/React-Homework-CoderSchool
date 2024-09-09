import SearchAppBar from "./components/SearchAppBar";
import React from "react";
import Divider from "@mui/material/Divider";
import { Routes, Route } from "react-router-dom";
import { JobPage } from "./pages/JobPage";
import Login from "./components/Login";
import { InputProvider } from "./context/InputPrivider";
import "./App.css";

function App() {
  return (
    <div>
      <InputProvider>
        <SearchAppBar />
        <Divider />
        <Routes>
          <Route path="/" element={<JobPage />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </InputProvider>
    </div>
  );
}

export default App;
