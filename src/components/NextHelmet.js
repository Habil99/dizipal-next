import React from 'react'
import Head from "next/head";

const NextHelmet = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default NextHelmet
