// import { useState } from 'react'

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Orders from "./Pages/Orders/Orders";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";

function App() {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
