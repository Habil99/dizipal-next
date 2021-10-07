import Link from 'next/link'
import {BiPlus} from "react-icons/bi";
import {BsPlayCircle} from 'react-icons/bs'

const Section = ({title, size, data}) => {
  return (
    <div className="section">
      <div className="section-heading">
        <p className="section-title">{title}</p>
        <Link href="/movies">
          <a className="btn-more">
            <BiPlus color="current"/>
            <span>Show more</span>
          </a>
        </Link>
      </div>
      <div className={`section-cards ${size === 'lg' ? 'lg' : 'md'}`}>
        {data?.map(({id, original_title, vote_average, backdrop_path}) => (
          <div className="section-card" key={id}>
            <Link href="/">
              <a className="stretched-link"/>
            </Link>
            <div className="section-card-img">
              <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="Dizipal Movies"/>
              <div className="section-card-img-layer">
              <span>
                <BsPlayCircle/>
              </span>
                <span className="watch">Watch</span>
              </div>
            </div>
            <p className="section-card-name">{original_title}</p>
            <p>
              <span className="section-card-imdb-title">IMDB</span>
              <span className="section-card-imdb-rate">{vote_average}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section;
