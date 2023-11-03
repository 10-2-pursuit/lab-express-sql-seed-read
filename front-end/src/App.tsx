import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewEntryForm from "./components/NewEntry";
import SongDetail from "./components/SongDetail";
import EditEntryForm from "./components/EditEntryForm";
import FourOFour from "./components/FourOFour";
import SongsIndex from "./components/SongsIndex";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<SongsIndex />} />
            <Route path="/new" element={<NewEntryForm/>} />
            <Route path="/songs/:id" element={<SongDetail />} />
            <Route path="/songs/:id/edit" element={<EditEntryForm />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
