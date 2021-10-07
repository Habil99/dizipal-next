import React from 'react';
import Navbar from "@/components/Layout/Navbar";
import Image from "next/image";
import {FiSearch} from 'react-icons/fi'
import NextNProgress from "@/components/NProgress";

const index = ({children}) => {
  return (
    <div className="dizipal">
      <NextNProgress />
      <Navbar/>
      {children}
    </div>
  )
}

export default index;
