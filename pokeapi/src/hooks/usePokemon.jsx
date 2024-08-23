import { useEffect, useState } from "react"

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const responses = await Promise.all(
        Array.from({ length: 150 }, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        )
      );

      // mapear y pedir la información
      const data = await Promise.all(
        responses.map((res) => res.json()) // convertir cada respuesta a json
      );
      const formattedData = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default, // estructura-detalles del pokémon
      }))
      setPokemons(formattedData);
      setFilteredPokemons(formattedData);
    }

    fetchPokemons();
  }, []);

  //función de búsqueda o filtro para los pokémon
  const filterPokemons = (query) => {
    if (!query) {
      setFilteredPokemons(pokemons) // si no hay consultas
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLoweCase().incluides(query.toLoweCase()))
      setFilteredPokemons(filtered)
    }
  }
  return { pokemons: filteredPokemons, filterPokemons }
}