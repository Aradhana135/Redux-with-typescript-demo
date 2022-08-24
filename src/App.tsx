import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootStore } from './store';
import { GetPokemon } from './actions/PokemonAction';
function App() {
  const [pokemonName,setPokemonName]=useState("")
  const pokemonState=useSelector( (state: RootStore) => state.pokemon)
  const dispatch=useDispatch()
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
setPokemonName(event.target.value)
  }
  // const handleSubmit=()=>dispatch(GetPokemon(pokemonName));
  const handleSubmit=()=>{dispatch(GetPokemon(pokemonName))};
  return (
    <div className="App">
      <input type='text' onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
