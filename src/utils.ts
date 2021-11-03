import { Pokemon, PokemonMove, PokemonColor } from './types';

export const fetchPokemon = async (pokemonName: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then<Pokemon | null>(
    (res) => {
      const expectedResponseCode = 200;
      if (res.status === expectedResponseCode) {
        return res.json();
      }
      else{
        return null;
      }
    }
  );

export const fetchPokemonColor = async (pokemonId: number) => 
  fetch(`https://pokeapi.co/api/v2/pokemon-color/${pokemonId}`).then<PokemonColor | null>(
    (res) => {
      const expectedResponseCode = 200;
      if (res.status === expectedResponseCode) {
        return res.json();
      }
      else{
        return null;
      }
    }
  );

export const fetchPokemonMoves = async (moveNames: string[]) => {
  if(moveNames.length < 2){
    return null;
  }
  let move1 : PokemonMove = await fetch(`https://pokeapi.co/api/v2/move/${moveNames[0]}`).then<PokemonMove>(
    (res) => res.json()
  );
  let move2 : PokemonMove = await fetch(`https://pokeapi.co/api/v2/move/${moveNames[1]}`).then<PokemonMove>(
    (res) => res.json()
  ); 
  return [move1, move2]
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const resolveTypeColor = (pokemon : Pokemon): any => {
  let backgroundColor: any
  switch(pokemon.types[0].type.name){
    case "fire":
      backgroundColor = "#eb7f2f"
      break;
    case "grass":
      backgroundColor = "#78c850"
      break;
    case "water":
      backgroundColor = "#6890f0"
      break;
    case "electric":
      backgroundColor = "#f5d02f"
      break;
    case "psychic":
      backgroundColor = "#e85687"
      break;
    case "ice":
      backgroundColor = "#98d8d8"
      break;
    case "dragon":
      backgroundColor = "#7038f8"
      break;
    case "dark":
      backgroundColor = "#705848"
      break;
    case "fairy":
      backgroundColor = "#ee99ac"
      break;
    case "fighting":
      backgroundColor = "#c03028"
      break;
    case "flying":
      backgroundColor = "#a890f0"
      break;
    case "poison":
      backgroundColor = "#a040a0"
      break;
    case "ground":
      backgroundColor = "#e0c068"
      break;
    case "rock":
      backgroundColor = "#b8a038"
      break;
    case "bug":
      backgroundColor = "#a8b820"
      break;
    case "ghost":
      backgroundColor = "#705898"
      break;
    case "steel":
      backgroundColor = "#b8b8d0"
      break;
    default:
      backgroundColor = "#a8a878"
      break;
  }
  return backgroundColor;
}

