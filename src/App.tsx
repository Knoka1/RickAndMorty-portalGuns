import React from "react";

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
