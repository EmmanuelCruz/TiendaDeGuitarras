import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { formateaFecha } from '../../utils';
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {

  const router = useRouter()
  const { contenido, imagen, published_at, titulo } = entrada

  return (
    <Layout
      pagina={titulo}
    >
      <main className='contenedor'>
        <h1 className='heading'>{titulo}</h1>
        <article className={styles.entrada}>
          <Image alt={`Imagen de entrada ${titulo}`} layout='responsive' width={800} height={600} src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}/>
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formateaFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()

  const paths = resultado.map(entrada => ({
    params: { url: entrada.url }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { url } }) {

  const urlPath = `${process.env.API_URL}/blogs?url=${url}`
  const respuesta = await fetch(urlPath)
  const resultado = await respuesta.json()

  return {
    props: {
      entrada: resultado[0]
    }
  }
}

// export async function getServerSideProps({query: {id}}) {

//   const url = `${process.env.API_URL}/blogs/${id}`
//   console.log(url)
//   const respuesta = await fetch(url)
//   const resultado = await respuesta.json()

//   console.log(resultado)

//   return {
//     props: {
//       entrada: resultado
//     }
//   }
// }

export default EntradaBlog
