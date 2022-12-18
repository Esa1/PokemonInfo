import { useState, createContext, useEffect } from "react"
const Context = createContext()

function PokemonInfoContextProvider({children}) {
    //Show these in Info.js
    const [data, setData] = useState(['Poke1', 'Poke2', 'Poke3'])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export {PokemonInfoContextProvider, Context}