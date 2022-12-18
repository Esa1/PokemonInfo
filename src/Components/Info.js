import React, { useContext, useState } from "react"
import {Context} from "./Context"

/* 1. Add state to this component to hold the new username in a controlled form
* (https://reactjs.org/docs/forms.html#controlled-components)
* (https://scrimba.com/p/p7P5Hd/cW8Jdfy)*/

export default function Info() {
    console.log("Info")

    const [currentDataType, setCurrentDataType] = useState("")
    const PokemonData = useContext(Context)
    console.log(PokemonData)

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
            <div>{PokemonData}</div>
        </>
    )
}