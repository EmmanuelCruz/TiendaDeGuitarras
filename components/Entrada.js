import React from 'react'
import { formateaFecha } from '../utils';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {

  const {titulo, resumen, imagen, published_at, id, url} = entrada

  return (
    <article>
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`} width={800} height={600} layout='responsive' alt={`imagen ${titulo}`} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className='fecha'>{formateaFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>

        <Link href={`/blog/${url}`}>
          <a className={styles.link}>
            Leer entrada
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Entrada
