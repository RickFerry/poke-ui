import axios from 'axios';

const api = axios.create({
  baseURL: ' http://localhost:5219/api',
});

export const getRandomPokemons = () => api.get('/pokemon/random');
export const getPokemonById = (id) => api.get(`/pokemon/${id}`);
export const getCapturedPokemons = () => api.get('/pokemon/captured');
export const capturePokemon = (pokemon) => api.post('/pokemon/capture', pokemon);
export const createMaster = (master) => api.post('/master', master);
