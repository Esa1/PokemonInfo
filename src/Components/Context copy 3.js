import { useState, createContext, useEffect } from "react"
import { apikey } from "../keys.js"
import apiEndPoints from "../tools/apiEndPoints.js"

const Context = createContext()

function PokemonInfoContextProvider({children}) {
    const [typeEffectivenessData, setTypeEffectivenessData] = useState([])
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
//            'X-RapidAPI-Key': '467686f795msh5d709b323480269p1381a0jsn77efa3eaa824',
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
        }
    };

    function setFetchApi(apiName) {
        setApiToFetch(apiName)
    }

    useEffect(() => {
//            fetch('https://pokemon-go1.p.rapidapi.com/type_effectiveness.json', options)
//            console.log(`https://pokemon-go1.p.rapidapi.com/${apiEndPoints[i]}.json`)

            fetch(`https://pokemon-go1.p.rapidapi.com/${apiToFetch}.json`, options)
                .then(response => response.json())
                .then(response => {
//                    setData(response)
                    setData(d => ({
                        ...d,
                        [apiToFetch]: response
                    }))
/*                    d = {
                        ...d,
                        [apiEndPoints[i]]: response
                    }*/
                })
                .catch(err => console.error(err));
                
/*           let propName = `test${i}`
            d = {...d, [`test${i}`] : i}
            console.log("d= ", d)*/
        }
, [apiToFetch])
console.log("data=", data)
    return (
        <Context.Provider value={{data, setFetchApi}}>
            {children}
        </Context.Provider>
    )
}

export {PokemonInfoContextProvider, Context}

/*
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
*/
/*
    useEffect(() => {
        let d = {}
        for (let i=0; i<apiEndPoints.length; i++) {
//            fetch('https://pokemon-go1.p.rapidapi.com/type_effectiveness.json', options)
//            console.log(`https://pokemon-go1.p.rapidapi.com/${apiEndPoints[i]}.json`)

            fetch(`https://pokemon-go1.p.rapidapi.com/${apiEndPoints[i]}.json`, options)
                .then(response => response.json())
                .then(response => {
                    setData(response)
                    localStorage.setItem("type_effectiveness", response);
                })
                .catch(err => console.error(err));
                
            let propName = `test${i}`
            d = {...d, [`test${i}`] : i}
            console.log("d= ", d)
        }
        setData( d )
}, [])
*/

/*
    useEffect(() => {
        let d = {}
        for (let i=0; i<apiEndPoints.length; i++) {
//            fetch('https://pokemon-go1.p.rapidapi.com/type_effectiveness.json', options)
//            console.log(`https://pokemon-go1.p.rapidapi.com/${apiEndPoints[i]}.json`)

            fetch(`https://pokemon-go1.p.rapidapi.com/${apiEndPoints[i]}.json`, options)
                .then(response => response.json())
                .then(response => {
                    setData(response)
                    d = {
                        ...d,
                        [apiEndPoints[i]]: response
                    }
                })
                .catch(err => console.error(err));
                
           let propName = `test${i}`
            d = {...d, [`test${i}`] : i}
            console.log("d= ", d)
        }
        setData( d )
}, [])
*/

