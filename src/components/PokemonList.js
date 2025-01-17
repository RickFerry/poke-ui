import React, { useEffect, useState } from 'react';
import { getRandomPokemons } from '../api/pokemonApi';
import { Link } from 'react-router-dom';

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
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;