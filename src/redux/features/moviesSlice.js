import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: null,
  error: null
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    SET_MOVIES: (state, {payload}) => {
      state.movies = payload;
    }
  },
  extraReducers: {
  }
})

export const {SET_MOVIES} = moviesSlice.actions

export default moviesSlice.reducer;
