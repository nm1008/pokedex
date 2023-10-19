import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";

import axios from "axios";

import Navbar from "./components/Navbar";
import PokemonCards from "./components/Cards";

const url = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setApiData(res.data.results);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="bg-slate-500 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {apiData.map((p, i) => (
          <PokemonCards key={i} pokemon={p.name} index={i + 1} />
        ))}
      </div>
    </>
  );
}

export default App;
