import { Layout, Section } from "@/components";
import Head from "next/head";
import { connect } from "react-redux";
import { SET_MOVIES } from "@/redux/features/moviesSlice";
import { wrapper } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { tmdbApiConfig } from "@/base";
import { getPopularMovies, getTopRateMovies } from "@/services/tmdbApi";

import { SearchBanner } from "@/components";

function Home({ response, topRatedMovies, movies, status, SET_MOVIES, name }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SET_MOVIES(response))
  }, [])

  return (
    <>
      <Head>
        <title>Dizipal NextJs</title>
      </Head>
      <SearchBanner />
      <div className="g-container--def g-container">
        <h1>{name}</h1>
        {/* <pre>{JSON.stringify(movies.results)}</pre> */}
        <Section size="lg" title="Popular movies" data={movies.results} type="popular" />
        <Section size="md" title="Top rated" data={topRatedMovies} type="top_rated" />
      </div>
    </>
  )
}
//
// export const getStaticPaths = async () => {
//   const res = await axios.get(`${tmdbApiConfig.baseUrl}/movie/popular?api_key=${tmdbApiConfig.apiKey}`)
//   const {results} = res.data
//
//   const paths = results.map(({ id, original_title }) => ({
//     params: {
//       name: original_title,
//       id,
//     }
//   }))
//
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

export const getServerSideProps = async () => {
  const res = await getPopularMovies()
  const { data: topRated } = await getTopRateMovies()

  if (res.status === 200) {
    return {
      props: {
        response: res.data,
        topRatedMovies: topRated.results
      }
    }
  } else {
    return {
      props: {
        response: res.data.status
      }
    }
  }

}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  status: state.movies.status
})

const mapDispatchToProps = state => ({
  SET_MOVIES: SET_MOVIES
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
