import React from "react";
import SearchInput from "./SearchInput";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="header">
      <h1>Anime Movie App</h1>

      <SearchInput
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search for anime..."
      />
    </header>
  );
};

export default Header;
