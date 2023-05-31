import React, { useState, useEffect } from 'react';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results));
  }, []);

  const handleMouseOver = (productId) => {
    setSelectedPokemonId(productId);
  };
  const handleMouseOut = () => {
    setSelectedPokemonId(null);
  };


  return (
    <div>
      <h1>Pokedex</h1>
      <ul className='Listapokemon'>
        {pokemonList.map((pokemon, index) => (
          <li onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut} key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <h1>{selectedPokemonId}</h1>
    </div>
  );
};

export default Pokedex;
