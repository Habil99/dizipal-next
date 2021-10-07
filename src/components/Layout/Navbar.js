import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar sticky-top">
      <div className="g-container--def g-container">
        <div className="d-flex align-items-center justify-content-between">

          <ul className="nav-links">
            <li className="nav-links-item">
              <Link href="/top-rated-movies">
                <a>Top rated movies</a>
              </Link>
            </li>
            <li className="nav-links-item">
              <Link href="/popular-movies">
                <a>Popular movies</a>
              </Link>
            </li>
            <li className="nav-links-item">
              <Link href="/upcoming-movies">
                <a>Upcoming movies</a>
              </Link>
            </li>
            <li className="nav-links-item">
              <Link href="/popular-people">
                <a>Popular people</a>
              </Link>
            </li>
          </ul>
          <div className="navbar-brand">
            <Link href="/">
              <a>
                <Image
                  placeholder="Dizipal Next Logo"
                  translate="no"
                  src="/img/dizipal-logo.png"
                  alt="dizipal next js"
                  layout="fill"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
