import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger, pokemonNumber } from "./middlewares/index";
import "./styles/index.css";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger, pokemonNumber)
);

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
