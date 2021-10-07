import Image from "next/image";
import {FiSearch} from "react-icons/fi";
import React from "react";

const SearchBanner = () => {
  return (
    <div className="search-component">
      <div className="search-component-logo">
        <Image
          src="/img/dizipal-logo.png"
          width={200}
          height={60}
          alt="Dizipal Logo NextJs"
        />
      </div>
      <div className="search-component-form">
        <div className="search-box">
          <input type="text" name="" id="" placeholder="Search..." />
          <button className="search-box-icon">
            <FiSearch color="current" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBanner;
