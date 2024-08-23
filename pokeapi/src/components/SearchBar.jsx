import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}