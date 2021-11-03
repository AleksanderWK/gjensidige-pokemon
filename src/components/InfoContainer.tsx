import React from 'react';
import { Pokemon, PokemonColor, PokemonMove } from '../types';
import Frame from './Frame';
import "../app.css"
import Move from './Move';
import { capitalizeFirstLetter, resolveTypeColor } from '../utils';

interface Props {
  pokemon?: Pokemon;
  pokemonColor?: PokemonColor | null;
  pokemonMoves?: PokemonMove[] | null;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon, pokemonColor, pokemonMoves }) => {
  if (pokemon) {
    return (

        <Frame width={400} height={600} color={"#e8c029"} radius={20} borderSize={20}>
          <div className="contentLayer" style={{backgroundColor: resolveTypeColor(pokemon)}}>
            <div className="header">
              {capitalizeFirstLetter(pokemon.name)}
              <span className="statsGroup">
                <span style={{textTransform: "uppercase", color: "darkred"}}>
                  <div className="hpStat">
                    {pokemon.stats[0].base_stat} {pokemon.stats[0].stat.name}
                  </div>
                </span>
                <span>{capitalizeFirstLetter(pokemon.types[0].type.name)}</span>
              </span>
            </div>
            <Frame width={350} height={230} color={"#d8d169"} borderSize={5}>
              <div style={{backgroundColor: pokemonColor ? pokemonColor.name : "white", height: "100%"}}>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pic" className="profilePic"/>
              </div>
            </Frame>
            <div className="infoBar">
              <span style={{alignSelf: "center"}}>#{pokemon.id}</span>
              <span style={{alignSelf: "center"}}>Height: {pokemon.height}</span>
              <span style={{alignSelf: "center"}}>Weight: {pokemon.weight}</span>
            </div>
            {pokemonMoves?.map(move => 
              <Move key={move.id} move={move}/>
            )}
          </div>  
        </Frame>
    );
  }
  return null;
};
export default InfoContainer;
