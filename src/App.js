import './App.css';
import Info from "./Components/Info"
import { PokemonInfoContextProvider } from './Components/Context';

function App() {
  return (
    <>
      <h1>Pokemon Info</h1>
      <PokemonInfoContextProvider>
        <Info />
      </PokemonInfoContextProvider>
    </>
  );
}

export default App;
