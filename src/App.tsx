import React, { useState } from "react";
import Header from "./components/Header";
import AnimeList from "./pages/AnimeList";
import useDebounce from "./hooks/useDebounce";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main>
        <AnimeList searchQuery={debouncedSearchQuery} />
      </main>
    </div>
  );
};

export default App;
