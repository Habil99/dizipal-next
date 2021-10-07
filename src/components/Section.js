import Link from 'next/link'
import Image from 'next/image'
import {BiPlus} from "react-icons/bi";
import {BsPlayCircle} from 'react-icons/bs'
import {SectionCard} from "@/components/index";

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
          <SectionCard
            key={id}
            id={id}
            title={original_title}
            imdb={vote_average}
            backdrop_path={backdrop_path}
          />
        ))}
      </div>
    </div>
  )
}

export default Section;
