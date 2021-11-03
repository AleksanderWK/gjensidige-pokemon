import React from "react";
import { PokemonMove } from "../types";
import "../app.css";
import { capitalizeFirstLetter } from '../utils';


interface Props{
    move: PokemonMove;
}


// Returns the latest version of the flavor text. (From the newest game)
const getNewestEnglishMoveFlavorText = (pokemonMove: PokemonMove): string | null => {
    for(let i = (pokemonMove.flavor_text_entries.length)-1; i >= 0 ; i--){
        if(pokemonMove.flavor_text_entries[i].language.name === "en"){
          return pokemonMove.flavor_text_entries[i].flavor_text;
        }
    }
    return null;
  }

export default function Move(props: Props): JSX.Element{
    return(
        <div className="moveBody">
            <div style={{width: "85%"}}>
                <span style={{fontWeight: "bold", fontSize: "x-large"}}>
                    {capitalizeFirstLetter(props.move.name)}
                </span> 
                {" "}{getNewestEnglishMoveFlavorText(props.move)}
            </div>
            <span style={{fontWeight: "bold", fontSize: "x-large", alignSelf: "center"}}>
                {props.move.power}
            </span>
        </div>
    );
}