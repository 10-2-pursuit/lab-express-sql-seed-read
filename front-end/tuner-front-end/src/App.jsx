import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import Index from "../Components/Index";
import New from "../Components/New";
import Show from "../Components/Show";
import Update from "../Components/Update";
import ErrorMessage from "../Components/ErrorMessage"
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Update />} />
            <Route path="/404" element={<ErrorMessage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
