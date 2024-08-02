import React, { useEffect, useState } from 'react';
import { getRandomPokemons } from '../api/pokemonApi';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRandomPokemons()
      .then(response => {
        // Verifique se response.data é um array
        if (Array.isArray(response.data)) {
          setPokemons(response.data);
        } else {
          setError('Invalid data format');
        }
      })
      .catch(err => {
        setError('Failed to fetch pokemons');
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Random Pokemons</h2>
      {error && <p>{error}</p>}
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;