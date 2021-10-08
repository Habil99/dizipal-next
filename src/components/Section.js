import Link from 'next/link'
import Image from 'next/image'
import {BiPlus} from "react-icons/bi";
import {BsPlayCircle} from 'react-icons/bs'
import {Card} from "@/components/index";

const Section = ({title, size, data, type}) => {
  return (
    <div className="section">
      <div className="section-heading">
        <p className="section-title">{title}</p>
        <Link href="/movies">
          <a className="btn-more">
            <BiPlus color="current"/>
            <Link href={`/movies/${type}`}>
              <a>Show more</a>
            </Link>
          </a>
        </Link>
      </div>
      <div className={`section-cards ${size === 'lg' ? 'lg' : 'md'}`}>
        {data?.map(({id, original_title, vote_average, poster_path}) => (
          <Card
            key={id}
            id={id}
            title={original_title}
            imdb={vote_average}
            poster_path={poster_path}
          />
        ))}
      </div>
    </div>
  )
}

export default Section;
