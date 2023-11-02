import EditEntryForm from "../../front-end/src/components/EditEntryForm";
import Footer from "../../front-end/src/components/Footer";
import FourOFour from "../../front-end/src/components/FourOFour";
import { Home } from "../../front-end/src/components/Home";
import { Nav } from "../../front-end/src/components/Nav";
import NewEntryForm from "../../front-end/src/components/NewEntry";
import SongDetail from "../../front-end/src/components/SongDetail";
import { SongsIndex } from "../../front-end/src/components/SongsIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          {/* shows */}
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<SongsIndex />} />
          <Route path="/new" element={<NewEntryForm />} />
          <Route path="/songs/:id" element={<SongDetail />} />
          <Route path="/songs/:id/edit" element={<EditEntryForm />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
