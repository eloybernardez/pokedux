import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Button, Col, Spin, Row } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import { setSearched, setError } from "./slices/uiSlice";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./styles/App.css";

function App() {
  // Redux makes shallow equality checking (check if the references are equal) so we can use shallowEqual to avoid unnecessary re-renders.
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searched = useSelector((state) => state.ui.searched);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  const dispatch = useDispatch();

  const isEmpty = pokemons.length ? false : true;

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col md={{ span: 4, offset: 10 }} xs={{ span: 12, offset: 6 }}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col xs={{ span: 12, offset: 6 }} md={{ span: 8, offset: 8 }}>
        <Searcher loading={loading} error={isEmpty} />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <>
          <Row justify="center">
            {searched ? (
              <Button
                type="primary"
                onClick={() => {
                  dispatch(setSearched(false));
                  dispatch(setError(isEmpty));
                  dispatch(fetchPokemonsWithDetails());
                }}
              >
                Go back
              </Button>
            ) : null}
          </Row>
          <PokemonList pokemons={pokemons} />
        </>
      )}
    </div>
  );
}

export default App;
