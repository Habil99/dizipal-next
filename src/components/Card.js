import Link from "next/link";
import Image from "next/image";
import {BsPlayCircle} from "react-icons/bs";
import { tmdbApiConfig } from "@/base";

const Card = ({title, poster_path, imdb, id}) => {
  return (
    <div className="section-card">
      <Link href={`/movie/${encodeURIComponent(title)}?id=${id}`}>
        <a className="stretched-link"/>
      </Link>
      <div className="section-card-img">
        <Image
          src={`${tmdbApiConfig.imageUrl}${poster_path}`}
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

export default Card;
