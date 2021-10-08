import Link from "next/link";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { FaImdb } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { tmdbApiConfig } from "@/base";

const Detail = ({ movie }) => {
  const {
    title,
    backdrop_path,
    vote_average: imdb, vote_average,
    id,
    overview,
    adult,
    genres,
    status,
    homepage,
    tagline
  } = movie;

  return (
    <div className="details">
      <div className="row m-0">
        <div className="col-lg-6">
          <div className="details-poster">
            <Image
              layout="fill"
              src={tmdbApiConfig.imageUrl + backdrop_path}
              alt={title}
              loading="eager"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="details-title">{title}</h3>
          <p className="details-imdb">
            <FaImdb />
            IMDB: {imdb}
          </p>
          <h5 className="details-section-title">Overview</h5>
          <p className="details-overview">
            {overview}
            <br />
            <b>This movie is {adult ? '' : 'not'} for adults.</b>
          </p>
          <div className="details-genres">
            {genres?.map(({ id, name }) => (
              <Link href={`/movies/${encodeURIComponent(name)}?id=${id}`} key={id}>
                <a className="details-genre">{name}</a>
              </Link>
            ))}
          </div>
          <p>Status: {status}</p>
          <a className="details-link" href={homepage} target="_blank" rel="noopener noreferrer">
            Go to original page for {tagline ? tagline : 'movie'} <HiOutlineExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Detail;
