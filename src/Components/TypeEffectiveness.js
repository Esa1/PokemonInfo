import React, { useContext, useState } from "react";
import {Context} from "./Context"

export default function TypeEffectiveness() {
    const [currentType, setCurrentType] = useState("Bug")
    //Get object who's keys are poketypes and values are objects with the same keys
    //with effectiveness as values
    /* data structure is 
        {
            type_effectiveness: [...],
            ...
        }*/
        const {data} = useContext(Context)
    /*
        https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
        const propertyNames = Object.keys(person);
    */
    //Get array of poke types
    const pokeTypesArr = Object.keys(data['type_effectiveness']);

    //Contains effectiveness for all the pokemon types
    const currentData = data['type_effectiveness']

    //Now select the one user wants
    const dataForCurrentType = currentData[currentType]

    //Convert to array
    const currentDataArr = Object.entries(dataForCurrentType)

    const displayData = currentDataArr.map(item => {
        return <div key={item[0]}>{item[0]}: {item[1]}</div>
    })

    function handleChange(e) {
        setCurrentType(e.target.value)
    }

    const selectOptionList = pokeTypesArr.map(p => (
        <option value={p} key={p}>{p}</option>
    ))

    return (
        <div className="infoArea">
            <h2>TypeEffectiveness</h2>
            <form>
                <label htmlFor="pokeTypes">Pokemon types: </label>
                <select
                    id="pokeTypes"
                    onChange={handleChange}
                >
                    {selectOptionList}
                </select>
                <div>{displayData}</div>
            </form>
        </div>
    )
}