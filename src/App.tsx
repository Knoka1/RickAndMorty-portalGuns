import React from "react";

import Home from "./views/Home";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
