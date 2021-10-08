import React from 'react'
import { getDataByType, getMoviesByGenreId } from '@/services/tmdbApi'
import { Section } from '@/components'

const MoviesByGenre = ({ bytype, data }) => {
  return (
    <Section data={data} title={bytype} />
  )
}

export const getServerSideProps = async context => {
  const { bytype, id } = context.query
  const { data } = id ? await getMoviesByGenreId(id) : await getDataByType(bytype, true)

  return {
    props: {
      bytype,
      data: id ? data.results : data
    }
  }
}

export default MoviesByGenre