import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import MainHeader from "./components/Header/MainHeader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
