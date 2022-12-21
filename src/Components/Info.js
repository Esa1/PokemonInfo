import React, { useContext, useState } from "react"
import TypeEffectiveness from "./TypeEffectiveness"

/* 1. Add state to this component to hold the new username in a controlled form
* (https://reactjs.org/docs/forms.html#controlled-components)
* (https://scrimba.com/p/p7P5Hd/cW8Jdfy)*/

export default function Info() {
    console.log("Info")

    const [currentInfo, setCurrentInfo] = useState("")
    
    function handleChange(e) {
        setCurrentInfo(e.target.value)
    }
    console.log(currentInfo)

    return (
        <>
            <h2>Search for:</h2>
            <form>
                <label htmlFor="infoSelection">Select info type: </label>
                <select
                    id="infoSelection"
                    name="infoSelection"
                    onChange={handleChange}
                >
                    <option value="">---Select---</option>
                    <option value="TypeEffectiveness">TypeEffectiveness</option>
                    <option value="PokemonRarity">PokemonRarity</option>
                </select>
            </form>
            {currentInfo === "TypeEffectiveness" && <TypeEffectiveness />}  
        </>
    )//import { apikey } from "./keys.js"

}