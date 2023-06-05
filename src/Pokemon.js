import React, { useState, useEffect } from 'react';
import logo from './logo.png';

const PokemonDetails = (props) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [currentId, setCurrentId] = useState(props.id);

  useEffect(() => {
    if (props.id !== null) {
      setCurrentId(props.id);
    }
  }, [props.id]);

  useEffect(() => {
    if (currentId !== null) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${currentId}`)
        .then(response => response.json())
        .then(data => setPokemonData(data));
    }
  }, [currentId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <div className='pokemon-container'>
        <img className='App-logo' src={logo} alt='pokebola' />
        <img className='pokemonblao'  src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
      </div>
      
    </div>
  );
};

export default PokemonDetails;
