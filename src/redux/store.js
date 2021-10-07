import {configureStore} from "@reduxjs/toolkit";
import moviesSlice from "@/redux/features/moviesSlice";
import {createWrapper} from "next-redux-wrapper";
import {compose, applyMiddleware} from "redux";

export const makeStore = () => configureStore({
  reducer: {
    movies: moviesSlice
  },
})

export const wrapper = createWrapper(makeStore)
