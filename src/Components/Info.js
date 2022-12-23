/* Version history
    22/12/22
    Fetching data by select box working.

*/
import React, { useContext, useState } from "react"
import TypeEffectiveness from "./TypeEffectiveness"
import {Context} from "./Context"

export default function Info() {
    const [currentInfo, setCurrentInfo] = useState("")
    const {setFetchApi} = useContext(Context) //Get the context for setting new fetch api
    
    function handleChange(e) {
        setCurrentInfo(e.target.value)
        setFetchApi(e.target.value)
    }

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
                    <option value="">-- Select --</option>
                    <option value="type_effectiveness">TypeEffectiveness</option>
                    <option value="type_effectiveness">PokemonRarity</option>
                </select>
            </form>
            {currentInfo === "type_effectiveness" && <TypeEffectiveness />}  
        </>
    )
}