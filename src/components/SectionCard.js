import Link from "next/link";
import Image from "next/image";
import {BsPlayCircle} from "react-icons/bs";

const SectionCard = ({title, backdrop_path, imdb, id}) => {
  return (
    <div className="section-card">
      <Link href={`/movie/${encodeURIComponent(title)}?id=${id}`}>
        <a className="stretched-link"/>
      </Link>
      <div className="section-card-img">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          layout="fill"
          alt="Dizipal Movies"
          placeholder="blur"
          blurDataURL="loading..."
        />
        <div className="section-card-img-layer">
              <span>
                <BsPlayCircle/>
              </span>
          <span className="watch">Watch</span>
        </div>
      </div>
      <p className="section-card-name">{title}</p>
      <p>
        <span className="section-card-imdb-title">IMDB</span>
        <span className="section-card-imdb-rate">{imdb}</span>
      </p>
    </div>
  )
}

export default SectionCard;
