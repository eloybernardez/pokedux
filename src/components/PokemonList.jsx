import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          description={pokemon.types.map((type) => type.type.name).join(", ")}
        />
      ))}
    </div>
  );
};
PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
