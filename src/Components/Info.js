import React from "react"

export default function Info() {

    const TypeEffectivenessSearch = () => {
        console.log("TypeEffectivenessSearch")
    }

    const PokemonRaritySearch = () => {
        console.log("PokemonRaritySearch")
    }

    return (
        <>
            <h2>Search for:</h2>
            <div>
                <button onClick={TypeEffectivenessSearch}>Type Effectiveness</button>
                <button onClick={PokemonRaritySearch}>Pokemon Rarity</button>
            </div>
            <div>Info area</div>
        </>
    )
}