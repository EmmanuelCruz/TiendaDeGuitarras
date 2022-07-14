import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footeer from './Footeer'

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Guitar - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
      </Head>

      <Header />
      {children}
      <Footeer />
    </div>
  )
}

export default Layout
