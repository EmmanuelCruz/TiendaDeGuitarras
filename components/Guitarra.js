import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {

  const { descripcion, imagen, titulo, nombre, precio, url } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image 
        src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}
        width={200}
        height={350}
        layout='responsive'
        alt={`Imagen guitarra ${nombre}`}
      />

      <div className={styles.contenido}>
        <h3>{guitarra.nombre}</h3>
        <p className={styles.descripcion}>{guitarra.descripcion}</p>
        <p className={styles.precio}>${guitarra.precio}</p>
        <Link
          href={`/guitarras/${url}`}
        >
          <a className={styles.enlace}>Ver producto</a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
