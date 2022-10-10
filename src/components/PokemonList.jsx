import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          id={pokemon.id}
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          description={pokemon.types.map((type) => type.type.name).join(", ")}
          isFavorite={pokemon.favorite}
        />
      ))}
    </div>
  );
};
PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
