import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <div>
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/"  Component={Home} />
      <Route exact path="/login"  Component={Login} />
      <Route/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
