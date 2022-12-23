/* Version history
    22/12/22
    Fetching data by select box working.

*/
import React, { useContext, useState } from "react"
import TypeEffectiveness from "./TypeEffectiveness"
import {Context} from "./Context"
import apiEndPoints from "../tools/apiEndPoints"

export default function Info() {
    const [currentInfo, setCurrentInfo] = useState("")
    const {setFetchApi} = useContext(Context) //Get the context for setting new fetch api
    
    function handleChange(e) {
        setCurrentInfo(e.target.value)
        setFetchApi(e.target.value)
    }
    
    //Generate selection list word1_word2_word3 -> Word1 Word2 Word3
    const optionList = apiEndPoints.map(apiEndPoint => {
        const wordArr = apiEndPoint.split("_")
        const optionListWordArr = wordArr.map(s => {
            //First letter to uppercase
            const firstLetter = s.slice(0,1)
            s.charAt(0).toUpperCase()
            const res = firstLetter.charAt(0).toUpperCase() + s.slice(1)
            return res
        })
        const optionListWord = optionListWordArr.join(" ")
        return <option value={apiEndPoints}>{optionListWord}</option>
    })

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
                    {optionList}
                </select>
            </form>
            {currentInfo === "type_effectiveness" && <TypeEffectiveness />}  
        </>
    )
}
/*                    <option value="">-- Select --</option>
                    <option value="type_effectiveness">TypeEffectiveness</option>
                    <option value="type_effectiveness">PokemonRarity</option>
*/