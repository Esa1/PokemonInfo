import React, { useContext, useState } from "react";
import {Context} from "./Context"

export default function TypeEffectiveness() {
    const [currentType, setCurrentType] = useState("Bug")
    //Get object who's keys are poketypes and values are objects with the same keys
    //with effectiveness as values
    const PokemonData = useContext(Context)
    /*
        https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
        const propertyNames = Object.keys(person);
    */
    //Get array of poke types
    const pokeTypesArr = Object.keys(PokemonData);
//    console.log("pokeTypes: ", pokeTypes)
    //Vertical axis of pokemon types
    //const pokeDivs = pokeTypes.map( (pokeType) => (<div key={pokeType}>{pokeType}</div>) )
    
/*    for (var key in PokemonData) {
        if (PokemonData.hasOwnProperty(key)) {
//          console.log(PokemonData[key]);
        }
    }*/
    console.log(PokemonData)
    console.log(currentType)
    const currentData = PokemonData[currentType]
//    console.log(currentData)
    /*console.log(Object.keys(currentData))
    console.log(Object.values(currentData))*/
    const currentDataArr = Object.entries(currentData)
    //console.log(Object.entries(PokemonData)[0])
    
    const displayData = currentDataArr.map(item => {
        console.log(item[0])
        return <div>{item[0]}: {item[1]}</div>

    })

    function handleChange(e) {
        console.log("handleChange: ", e.target.value)
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