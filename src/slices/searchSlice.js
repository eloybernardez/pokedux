import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchPokemons: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      const searchText = action.payload;

      const searchedPokemons = state.pokemons.filter(
        (pokemon) => pokemon.name === searchText.toLowerCase()
      );

      if (!searchedPokemons.lenght) return state.pokemons;

      return searchedPokemons;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
