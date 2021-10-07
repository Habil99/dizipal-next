import {Layout, Section} from "@/components";
import Head from "next/head";
import {connect} from "react-redux";
import {GET_MOVIES} from "@/redux/features/moviesSlice";
import {wrapper} from "@/redux/store";
import {useEffect} from "react";
import { useDispatch} from "react-redux";

function Home({movies, status, GET_MOVIES}) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GET_MOVIES())
  }, [dispatch])
  return (
    <>
      <Head>
        <title>Dizipal NextJs</title>
      </Head>
      <div className="g-container--def g-container">
        {status === 'loading' ? <div>Loading...</div> : <Section size="lg" title="Movies" data={movies}/>}
        <Section size="md" title="Series"/>
      </div>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => {
  store.dispatch(GET_MOVIES())
})

const mapStateToProps = state => ({
  movies: state.movies.movies,
  status: state.movies.status
})

const mapDispatchToProps = state => ({
  GET_MOVIES: GET_MOVIES
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
