import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footeer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>

        <p className={styles.derechos}>
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footeer
