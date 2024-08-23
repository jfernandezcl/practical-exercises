import { useState } from "react";

export function SearchBar({ onSearch }) {
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
    </div>
  )
}