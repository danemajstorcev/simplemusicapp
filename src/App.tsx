import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ArtistsList from "./components/ArtistsList/ArtistsList";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import artists from "./db";
import AlbumPage from "./components/AlbumPage/AlbumPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ArtistsList artists={artists} />} />
        <Route path="/artist/:id" element={<ArtistPage artists={artists} />} />
        <Route
          path="/artist/:id/:albumId"
          element={<AlbumPage artists={artists} />}
        />
      </Routes>
    </div>
  );
}

export default App;
