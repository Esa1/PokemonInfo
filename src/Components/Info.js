/* Version history
    22/12/22
    Fetching data by select box working.

*/
import React, { useContext, useState } from "react"
import TypeEffectiveness from "./TypeEffectiveness"
import {Context} from "./Context"

/* 1. Add state to this component to hold the new username in a controlled form
* (https://reactjs.org/docs/forms.html#controlled-components)
* (https://scrimba.com/p/p7P5Hd/cW8Jdfy)*/

export default function Info() {
    console.log("Info")

    const [currentInfo, setCurrentInfo] = useState("")
    const {setFetchApi} = useContext(Context) //Get the context for setting new fetch api
    
    function handleChange(e) {
        setCurrentInfo(e.target.value)
        setFetchApi(e.target.value) //22.
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
                    <option value="type_effectiveness">TypeEffectiveness</option>
                    <option value="type_effectiveness">PokemonRarity</option>
                </select>
            </form>
            {currentInfo === "type_effectiveness" && <TypeEffectiveness />}  
        </>
    )//import { apikey } from "./keys.js"

}