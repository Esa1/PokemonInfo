import { useState, createContext, useEffect } from "react"
const Context = createContext()

function PokemonInfoContextProvider({children}) {
    //Show these in Info.js
    const [data, setData] = useState(['Poke1', 'Poke2', 'Poke3'])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '467686f795msh5d709b323480269p1381a0jsn77efa3eaa824',
            'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://pokemon-go1.p.rapidapi.com/type_effectiveness.json', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    })
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export {PokemonInfoContextProvider, Context}