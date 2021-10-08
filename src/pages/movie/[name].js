import React from 'react'
import axios from "axios";
import { tmdbApi } from "@/base";
import { Detail, NextHelmet } from "@/components";

const MovieDetail = ({ movie }) => {
  console.log(movie)
  const { id, original_title, backdrop_path, vote_average, overview } = movie;

  return (
    <>
      <NextHelmet title={original_title} description={overview} />
      <Detail
        id={id}
        title={original_title}
        backdrop_path={backdrop_path}
        imdb={vote_average}
      />
    </>
  )
}

export const getServerSideProps = async context => {
  const { id } = context.query;
  const res = await axios.get(`${tmdbApi.baseUrl}/movie/${id}?api_key=${tmdbApi.apiKey}`)

  console.log(res)

  return {
    props: {
      movie: res.data
    }
  }
}

export default MovieDetail;
