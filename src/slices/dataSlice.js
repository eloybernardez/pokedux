import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetails } from "../api/index";
import { setLoading } from "../slices/uiSlice";

const initialState = {
  pokemons: [],
  search: "",
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    // dispatch loader
    dispatch(setLoading(true));
    // fetch
    const pokemonResponse = await getPokemons();
    const pokemonDetailed = await Promise.all(
      pokemonResponse.map((pokemon) => getPokemonDetails(pokemon))
    );

    const pokemonDetailedNames = pokemonDetailed.map((pokemon) => ({
      ...pokemon,
      name: `No. ${
        pokemon.id
      } ${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`,
    }));
    //dispatch loader
    dispatch(setLoading(false));

    dispatch(setPokemons(pokemonDetailedNames));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },

    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },

    setSearch: (state, action) => {
      state.search = action.payload;

      const searchPokemon = action.payload.toLowerCase();

      const searchedPokemons = state.pokemons.filter((pokemon) =>
        pokemon.name.includes(searchPokemon)
      );

      state.pokemons =
        searchPokemon && searchedPokemons.length > 0 ? searchedPokemons : [];
    },
  },
});

export const { setFavorite, setPokemons, setSearch } = dataSlice.actions;

export default dataSlice.reducer;
