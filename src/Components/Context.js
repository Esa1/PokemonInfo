/* Version history
    22/12/22
    Fetching data by select box working.

*/

import { useState, createContext, useEffect } from "react"
import { apikey } from "../keys.js"

const Context = createContext()

function PokemonInfoContextProvider({children}) {
    /* data structure is 
        {
            type_effectiveness: [...],
            ...
        }*/
    const [data, setData] = useState({})
    const [apiToFetch, setApiToFetch] = useState("type_effectiveness")

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
        }
    };

    function setFetchApi(apiName) {
        if (data[apiName]) console.log(`setFetchApi: ${apiName} data already exists`)
        else setApiToFetch(apiName)
    }

    useEffect(() => {
            fetch(`https://pokemon-go1.p.rapidapi.com/${apiToFetch}.json`, options)
                .then(response => response.json())
                .then(response => {
                    setData(prevData => ({
                        ...prevData,
                        [apiToFetch]: response
                    }))
                })
                .catch(err => console.error(err));
        }, [apiToFetch])
    
    return (
        <Context.Provider value={{data, setFetchApi}}>
            {children}
        </Context.Provider>
    )
}

export {PokemonInfoContextProvider, Context}
