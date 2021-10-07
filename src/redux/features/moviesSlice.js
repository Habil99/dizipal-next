import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {tmdbApi} from "@/base";
import {HYDRATE} from "next-redux-wrapper";

const {baseUrl, apiKey} = tmdbApi

const initialState = {
  movies: [],
  status: null,
  error: null
}

export const GET_MOVIES = createAsyncThunk(
  'movies/GET_MOVIES',
  async (_, {getState, dispatch}) => {
    const {movies} = getState()
    const res = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)

    dispatch(getData(res.data))

    return res.data
  }
)

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getData: (state, {payload}) => {
      // state.movies = payload.results
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(state, action, 'HYDRATE')
    },
    [GET_MOVIES.pending]: state => {
      state.status = 'loading'
    },
    [GET_MOVIES.rejected]: (state, action) => {
      // state.error = action;

      console.log(action)
    },
    [GET_MOVIES.fulfilled]: (state, action) => {
      state.movies = action.payload.results
      state.status = 'fulfilled'
    }
  }
})

export const {getData} = moviesSlice.actions

export default moviesSlice.reducer;
