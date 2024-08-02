import React, { useState } from 'react';
import { createMaster } from '../api/pokemonApi';

const MasterForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createMaster({ name, age, cpf }).then(() => {
      alert('Mestre Pokémon cadastrado com sucesso!');
      setName('');
      setAge('');
      setCpf('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Idade:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        CPF:
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </label>
      <button type="submit">Cadastrar Mestre</button>
    </form>
  );
};

export default MasterForm;
