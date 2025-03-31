import React, { useState } from "react";
import AnimeList from "./pages/AnimeList";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="app">
      <h1>Anime Movie App</h1>
      <input
        type="text"
        placeholder="Search for anime..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <AnimeList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
