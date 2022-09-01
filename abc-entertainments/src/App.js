import './App.css';
import AddAlbum from './components/add.album.js';
import Header from './components/header';
import editAlbum from './components/editAlbum';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllAlbums from './components/allAlbums';


function App() {
  return (
    <Router>
          <div className="app-container">
            <Header />
            <Routes>
              <Route exact path="/add" element={<AddAlbum/>}/>
              <Route exact path="/albums" element={<AllAlbums/>}/>
              <Route exact path="/edit/:id" element={<editAlbum />}/>
              <Route exact path="/delete/:id" element={<deleteAlbum />}/>
            </Routes>
            
          </div>
        </Router>
  );
}

export default App;
