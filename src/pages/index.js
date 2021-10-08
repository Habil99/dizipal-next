import {Layout, Section} from "@/components";
import Head from "next/head";
import {connect} from "react-redux";
import {SET_MOVIES} from "@/redux/features/moviesSlice";
import {wrapper} from "@/redux/store";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {tmdbApi} from "@/base";

import {SearchBanner} from "@/components";

function Home({response, movies, status, SET_MOVIES, name}) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SET_MOVIES(response))
  }, [])

  return (
    <>
      <Head>
        <title>Dizipal NextJs</title>
      </Head>
      <SearchBanner/>
      <div className="g-container--def g-container">
        <h1>{name}</h1>
        <pre>{JSON.stringify(movies.results)}</pre>
        {status === 'loading' ? <div>Loading...</div> : <Section size="lg" title="Popular movies" data={movies.results}/>}
        <Section size="md" title="Series"/>
      </div>
    </>
  )
}
//
// export const getStaticPaths = async () => {
//   const res = await axios.get(`${tmdbApi.baseUrl}/movie/popular?api_key=${tmdbApi.apiKey}`)
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
  const res = await axios.get(`${tmdbApi.baseUrl}/movie/popular?api_key=${tmdbApi.apiKey}`)

  if (res.status === 200) {
    return {
      props: {
        response: res.data
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
