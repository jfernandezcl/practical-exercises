import { useState } from "react";
import '../css/SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('')
  }

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  )
}