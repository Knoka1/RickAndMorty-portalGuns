import React from "react";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Orders from "./views/Orders";
import { Routes, Route } from "react-router-dom";

import styles from "./style";

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
