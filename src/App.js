import './App.css';
import './balao'
import React, { useState, useEffect } from 'react';
import PokemonDetails from './balao';

function App() {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [currentId, setCurrentId] = useState(selectedPokemonId);
  useEffect(() => {
    if (selectedPokemonId !== null) {
      setCurrentId(selectedPokemonId);
    }
  }, [selectedPokemonId]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleMouseOver = (productId) => {
    setSelectedPokemonId(productId);
  };
  const handleMouseOut = () => {
    setSelectedPokemonId(null);
  };

  return (
    <div className="App">
      <header className="App-header">
      
      <div className="caixaTexto">
      <div className='POKEMON'>
        <PokemonDetails id={currentId} width="400" />
      </div> 
      
      <ul className='Listapokemon row'>
        {pokemonList.map((pokemon, index) => (
          <li onMouseOver={() => handleMouseOver(index + 1)}
          onMouseOut={handleMouseOut} key={index}>{pokemon.name}</li>
        ))}
      </ul>
      </div>
      </header>
    </div>

  );
}

export default App;