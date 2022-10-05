import { useEffect } from "react";
import { getPokemons } from "./api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsAction } from "./actions";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import "./styles/App.css";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonResponse = await getPokemons();

      setPokemons(pokemonResponse);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
}); // function that receives the state and returns an object with the properties that we want to add to the component
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
}); // function that receives the dispatch and returns an object with the actions creators that we want to add to the component

export default connect(mapStateToProps, mapDispatchToProps)(App);
