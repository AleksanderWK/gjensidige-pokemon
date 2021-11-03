import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonMoves, fetchPokemonColor } from './utils';
import { Pokemon, PokemonMove, PokemonColor } from './types';

import InfoContainer from './components/InfoContainer';

import './app.css';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [pokemonColor, setPokemonColor] = useState<PokemonColor | null>();
  const [pokemonMoves, setPokemonMoves] = useState<PokemonMove[] | null>([]);
  const [inputValue, setInputValue] = useState<string>();
  const [statusMessage, setStatusMessage] = useState<string>("Search for a pokemon!");

  const getPokemon = () => {
    if(inputValue){
      fetchPokemon(inputValue.toLocaleLowerCase()).then((res) => {
        if(res != null){
          setPokemon(res);
        }
        else{
          setPokemon(null);
          setStatusMessage("No pokemon by that name!")
        }
      });
    }
  }

  useEffect(()=>{
    if(pokemon){
      fetchPokemonColor(pokemon.id).then((res) => setPokemonColor(res));
      
      let moves: string[] = pokemon.moves.slice(0,2).map(object => object.move.name)
      fetchPokemonMoves(moves).then((res) => 
        setPokemonMoves(res)
      );
    }
  }, [pokemon])

  return (
    <div className='appRoot'>
      <div className="contentWrapper">
        <div className={"pokemonNameInput"}>
          <input 
            type="text" 
            placeholder={"Pokemon name"}
            onChange={(event: React.ChangeEvent<{value: unknown}>) => {
              setInputValue(event.target.value as string);
            }}/>
            {" "}
            <button onClick={getPokemon}>Get card</button>
        </div>
        <div className="resultContainer">
          {pokemon ? 
            <InfoContainer pokemon={pokemon} pokemonColor={pokemonColor} pokemonMoves={pokemonMoves}/> 
            : 
            statusMessage
          }
        </div>
      </div>
    </div>
  );
};

export default App;
