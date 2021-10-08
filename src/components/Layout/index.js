import React from 'react';
import Navbar from "@/components/Layout/Navbar";

const index = ({ children }) => {
  return (
    <div className="dizipal">
      <Navbar />
      <div className="g-container g-container--def">
        {children}
      </div>
    </div>
  )
}

export default index;
