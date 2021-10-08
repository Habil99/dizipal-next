import axios from 'axios'
import { tmdbApiConfig } from '@/base'

const { baseUrl, apiKey } = tmdbApiConfig

const getPopularMovies = () => axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)

const getPopularMovieById = (id) => axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)

const getMoviesByGenreId = (id) => axios.get(`${baseUrl}/discover/movie?with_genres=${id}&api_key=${apiKey}`)

const getTopRateMovies = () => axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)

const getDataByType = async (type, more) => {
  if (more) {
    const {data: data1} = await axios.get(`${baseUrl}/movie/${type}?api_key=${apiKey}&language=en-US&page=1`)
    const {data: data2} = await axios.get(`${baseUrl}/movie/${type}?api_key=${apiKey}&language=en-US&page=2`)

    return { data: [...data1.results, ...data2.results] }  
  } else {
    return await axios.get(`${baseUrl}/movie/${type}?api_key=${apiKey}&language=en-US&page=1`)
  }
}

export {
  getPopularMovies,
  getPopularMovieById,
  getMoviesByGenreId,
  getTopRateMovies,
  getDataByType
}