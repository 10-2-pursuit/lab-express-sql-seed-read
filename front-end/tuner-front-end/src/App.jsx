import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import Index from "../Components/Index";
import New from "../Components/New";
import Show from "../Components/Show";
import Update from "../Components/Update";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<Show />} />
            <Route path="/transactions/:id/edit" element={<Update />} />
            <Route path="/404" element={<ErrorMessage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
