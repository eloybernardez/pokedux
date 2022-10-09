import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getPokemonDetails } from "./api";
import { setPokemons } from "./actions";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import "./styles/App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonResponse = await getPokemons();

      const pokemonDetailed = await Promise.all(
        pokemonResponse.map((pokemon) => getPokemonDetails(pokemon))
      );

      dispatch(setPokemons(pokemonDetailed));
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col md={{ span: 4, offset: 10 }} xs={{ span: 12, offset: 6 }}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col xs={{ span: 12, offset: 6 }} md={{ span: 8, offset: 8 }}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
