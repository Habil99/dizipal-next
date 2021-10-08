import React from 'react'
import axios from "axios";
import { tmdbApiConfig } from "@/base";
import { getPopularMovieById } from '@/services/tmdbApi';
import { Detail, NextHelmet } from "@/components";

const MovieDetail = ({ movie }) => {
  // console.log(movie)
  const { original_title, overview } = movie;

  return (
    <>
      <NextHelmet title={original_title} description={overview} />
      <pre>{JSON.stringify(movie)}</pre>
      <Detail movie={movie} />
    </>
  )
}

export const getServerSideProps = async context => {
  const { id } = context.query;
  const res = await getPopularMovieById(id)

  // console.log(res)

  return {
    props: {
      movie: res.data
    }
  }
}

export default MovieDetail;
