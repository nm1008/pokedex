const PokemonCards = ({ pokemon, index }) => {

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
  const pokeIndex = `#0${index}`;
  const pokeUpperCase = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

  return (
    <div
      className="bg-slate-900 border-4 flex flex-col mx-3 my-5 py-2 rounded-xl flex justify-center items-center"
      style={{}}
    >
      <h1 className="text-white flex justify-center my-5 font-bold text-xl">
        {pokeIndex}
      </h1>
      <div className="flex justify-center items-center">
        <img src={url} alt={pokemon} className="m-5 w-40 h-40" />
      </div>
      <h4 className="text-white my-5 font-bold">{pokeUpperCase}</h4>
    </div>
  );
};

export default PokemonCards;
