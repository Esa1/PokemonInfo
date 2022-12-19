import React, { useContext, useState } from "react"
import {Context} from "./Context"

/* 1. Add state to this component to hold the new username in a controlled form
* (https://reactjs.org/docs/forms.html#controlled-components)
* (https://scrimba.com/p/p7P5Hd/cW8Jdfy)*/

export default function Info() {
    console.log("Info")

    const [currentDataType, setCurrentDataType] = useState("")
    //Get object who's keys are poketypes and values are objects with the same keys
    //with effectiveness as values
    const PokemonData = useContext(Context)
    /*
        https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
        const propertyNames = Object.keys(person);
    */
    //Get array poke types
    const pokeTypes = Object.keys(PokemonData);
    console.log("pokeTypes: ", pokeTypes)
    const pokeDivs = pokeTypes.map( (pokeType) => (<div key={pokeType}>{pokeType}</div>) )
    for (var key in PokemonData) {
        if (PokemonData.hasOwnProperty(key)) {
          console.log(PokemonData[key]);
        }
    }
    const TypeEffectivenessSearch = () => {
        console.log("TypeEffectivenessSearch")
        setCurrentDataType("TypeEffectiveness")
    }

    const PokemonRaritySearch = () => {
        console.log("PokemonRaritySearch")
        setCurrentDataType("PokemonRarity")
    }

    return (
        <>
            <h2>Search for:</h2>
            <div>
                <button onClick={TypeEffectivenessSearch}>Type Effectiveness</button>
                <button onClick={PokemonRaritySearch}>Pokemon Rarity</button>
            </div>
            <div>{pokeDivs}</div>
        </>
    )//import { apikey } from "./keys.js"

}