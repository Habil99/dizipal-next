import React from 'react'
import axios from "axios";
import {tmdbApi} from "@/base";
import {SectionCard} from "@/components";

const MovieDetail = ({movie}) => {
  return (
    <div className="g-container g-container--def">
      <SectionCard id={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path}
                   imdb={movie.vote_average}/>
    </div>
  )
}

export const getServerSideProps = async context => {
  const {id} = context.query;
  const res = await axios.get(`${tmdbApi.baseUrl}/movie/${id}?api_key=${tmdbApi.apiKey}`)

  console.log(res)

  return {
    props: {
      movie: res.data
    }
  }
}

export default MovieDetail;
