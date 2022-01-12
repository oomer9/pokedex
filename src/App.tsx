import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pokedex/login" element={<Login />} />
          <Route path="/pokedex" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
