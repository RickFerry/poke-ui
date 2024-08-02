import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../api/pokemonApi';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemonById(id).then(response => {
      setPokemon(response.data);
    });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={`data:image/png;base64,${pokemon.sprite}`} alt={pokemon.name} />
      {/* Outros detalhes do Pokémon */}
    </div>
  );
};

export default PokemonDetail;
