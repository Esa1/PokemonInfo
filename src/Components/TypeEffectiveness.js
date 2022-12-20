import React, { useContext } from "react";
import {Context} from "./Context"

export default function TypeEffectiveness() {
    //Get object who's keys are poketypes and values are objects with the same keys
    //with effectiveness as values
    const PokemonData = useContext(Context)
    /*
        https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
        const propertyNames = Object.keys(person);
    */
    //Get array of poke types
    const pokeTypes = Object.keys(PokemonData);
    console.log("pokeTypes: ", pokeTypes)
    //Vertical axis of pokemon types
    const pokeDivs = pokeTypes.map( (pokeType) => (<div key={pokeType}>{pokeType}</div>) )
    
    for (var key in PokemonData) {
        if (PokemonData.hasOwnProperty(key)) {
          console.log(PokemonData[key]);
        }
    }

    return (
        <div className="infoArea">
            <h2>"TypeEffectiveness"</h2>
            {pokeDivs}
        </div>
    )
}