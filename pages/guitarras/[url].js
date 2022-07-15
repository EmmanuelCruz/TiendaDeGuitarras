import Image from "next/image"
import styles from '../../styles/Guitarra.module.css'
import Layout from "../../components/Layout"

const Producto = ({ guitarra }) => {

  const { descripcion, imagen, nombre, precio } = guitarra

  return (
    <Layout
      pagina={nombre}
    >
      <div className={styles.guitarra}>
        <Image 
          src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}
          width={200}
          height={350}
          layout='responsive'
          alt={`Imagen guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario}>
            <label>Cantidad:</label>
            <select>
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>

            <input
              type='submit'
              value='Agregar al carrito'
            />
          </form>

        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}} ) {

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarra)
  const resultado = await respuesta.json()

  return {
    props: {
      guitarra: resultado[0]
    }
  }
}

export default Producto
