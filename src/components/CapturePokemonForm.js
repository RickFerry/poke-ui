import React, { useState } from 'react';
import { capturePokemon } from '../api/pokemonApi';

const CapturePokemonForm = () => {
  const [pokemonId, setPokemonId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    capturePokemon({ pokemonId }).then(() => {
      alert('Pokémon capturado com sucesso!');
      setPokemonId('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pokémon ID:
        <input type="text" value={pokemonId} onChange={(e) => setPokemonId(e.target.value)} />
      </label>
      <button type="submit">Capturar Pokémon</button>
    </form>
  );
};

export default CapturePokemonForm;
