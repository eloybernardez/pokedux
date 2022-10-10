import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import "./styles/App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonResponse = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonResponse));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
