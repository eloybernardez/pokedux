import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  searched: false,
  error: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearched: (state, action) => {
      state.searched = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setSearched, setError } = uiSlice.actions;

export default uiSlice.reducer;
