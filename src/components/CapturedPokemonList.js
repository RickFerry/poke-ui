import React, { useEffect, useState } from 'react';
import { getCapturedPokemons } from '../api/pokemonApi';

const CapturedPokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getCapturedPokemons().then(response => {
            setPokemons(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Captured Pokemons</h2>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CapturedPokemonList;
