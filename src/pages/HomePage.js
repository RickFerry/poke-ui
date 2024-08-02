import React from 'react';
import { Link } from 'react-router-dom';
import PokemonList from '../components/PokemonList';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <li><Link to="/capture">Capture Pokemon</Link></li>
        <li><Link to="/master">Create Master</Link></li>
        <li><Link to="/captured">Captured Pokemons</Link></li>
      </ul>
    </nav>
    <PokemonList />
  </div>
);

export default HomePage;
