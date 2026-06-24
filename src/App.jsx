import { useState } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import photos from "./data/photos";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPhotos = photos.filter((photo) =>
    photo.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app">
      <h1>Photo Gallery</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Gallery photos={filteredPhotos} />
    </div>
  );
}

export default App;