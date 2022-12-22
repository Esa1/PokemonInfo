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
//    console.log("pokeTypes: ", pokeTypes)
    //Vertical axis of pokemon types
    //const pokeDivs = pokeTypes.map( (pokeType) => (<div key={pokeType}>{pokeType}</div>) )
    
/*    for (var key in PokemonData) {
        if (PokemonData.hasOwnProperty(key)) {
//          console.log(PokemonData[key]);
        }
    }*/
//    console.log(data)
//    console.log(currentType)


    //-Contains effectiveness for all the pokemon types
    const currentData = data['type_effectiveness']
//    console.log("currentData=", currentData)
    //-Now select the one user wants
    const dataForCurrentType = currentData[currentType]
    console.log("dataForCurrentType=", dataForCurrentType)
/*    console.log(Object.values(currentData))
    console.log("entries: ",  Object.entries(currentData))*/
    //-Convert to array
    const currentDataArr = Object.entries(dataForCurrentType)
    //console.log(Object.entries(PokemonData)[0])
//    console.log("isArray=", Array.isArray(currentDataArr))
    console.log("currentDataArr=", currentDataArr)
    console.log("displayData2: ")
    const displayData2 = currentDataArr.map(item => {
        console.log("item0=", item[0])
        console.log("item1=", item[1])
//        const item1DataArr = Object.entries(item[1])
//        console.log("item1DataArr=", item1DataArr)
        return <div>{item[0]}: {item[1]}</div>

    })
//    console.log("displayData2= ", displayData2)
    const displayData = ''

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
                <div>{displayData2}</div>
            </form>
        </div>
    )
}